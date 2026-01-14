import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function WebhooksPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Webhooks"
        description="**Webhooks** are automated messages sent from apps when something happens. They're event-driven HTTP callbacks that enable real-time data synchronization.

**Key Concepts:**
- **Event-driven**: Triggered by events
- **HTTP POST**: Sends data to URL
- **Real-time**: Instant notifications
- **Payload**: JSON data sent
- **Signature**: Security verification

**Common Use Cases:**
- Payment notifications (Stripe, PayPal)
- GitHub events (push, PR, issues)
- Form submissions
- Order updates
- User registrations

**Benefits:**
- Real-time updates
- Reduced polling
- Lower server load
- Event-driven architecture"
        codeContent={[
          {
            filePath: 'webhooks/receiver.ts',
            content: `import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    // 1. Verify signature
    const signature = request.headers.get('x-webhook-signature');
    const body = await request.text();
    
    const isValid = verifySignature(body, signature);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // 2. Parse payload
    const payload = JSON.parse(body);
    
    // 3. Process event
    switch (payload.event) {
      case 'payment.succeeded':
        await handlePaymentSuccess(payload.data);
        break;
      case 'user.created':
        await handleUserCreated(payload.data);
        break;
      default:
        console.log('Unknown event:', payload.event);
    }

    // 4. Return 200 OK
    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

function verifySignature(payload: string, signature: string | null): boolean {
  if (!signature) return false;
  
  const secret = process.env.WEBHOOK_SECRET!;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return signature === expectedSignature;
}`,
          },
          {
            filePath: 'webhooks/sender.ts',
            content: `import crypto from 'crypto';

interface WebhookPayload {
  event: string;
  data: any;
  timestamp: number;
}

export async function sendWebhook(
  url: string,
  payload: WebhookPayload
) {
  const secret = process.env.WEBHOOK_SECRET!;
  const body = JSON.stringify(payload);
  
  // Generate signature
  const signature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Signature': signature,
      },
      body,
    });

    if (!response.ok) {
      throw new Error(\`Webhook failed: \${response.status}\`);
    }

    return { success: true };
  } catch (error) {
    console.error('Webhook delivery failed:', error);
    // Implement retry logic here
    return { success: false, error };
  }
}`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}
