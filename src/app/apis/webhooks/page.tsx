import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function WebhooksPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Webhooks - Event-Driven HTTP Callbacks"
        description="🔔 **Webhooks** - La columna vertebral de la integración moderna entre aplicaciones

Los Webhooks son el mecanismo estándar de la industria para comunicación asíncrona event-driven entre sistemas. Cuando algo importante sucede en una aplicación (pago completado, nuevo usuario, PR merged), esa app hace un HTTP POST a tu URL con los datos del evento. Es como tener un notification system distribuido a escala de Internet.

**🎯 ¿Por qué Webhooks vs Polling?**
- ⚡ **Real-time**: Notificaciones instantáneas vs verificar cada N segundos
- 💰 **Eficiencia**: Cero requests desperdiciados, solo eventos reales
- 📉 **Carga reducida**: 99% menos requests que polling cada 5 segundos
- 🔋 **Escalabilidad**: Tu servidor solo procesa cuando hay eventos

**🔑 Conceptos Clave:**
- **Event-driven**: Triggered automáticamente por eventos del sistema
- **HTTP POST**: Envía JSON payload a tu endpoint configurado
- **Payload**: Datos completos del evento (user object, payment details, etc)
- **Signature Verification**: HMAC SHA256 para validar autenticidad
- **Retry Logic**: Reintentos automáticos si tu endpoint falla
- **Idempotency**: Procesa el mismo evento múltiples veces sin efectos secundarios

**🏢 Casos de Uso Reales:**
- 💳 **Stripe/PayPal**: payment.succeeded, subscription.canceled
- 🐙 **GitHub**: push, pull_request, issues, release
- 📧 **SendGrid/Mailchimp**: email.delivered, email.bounced
- 🛒 **Shopify**: order.created, fulfillment.updated
- 👥 **Auth0/Clerk**: user.created, login.success
- 📱 **Twilio**: sms.received, call.completed

**🔐 Security Best Practices:**
1. **Verify Signatures**: SIEMPRE valida HMAC antes de procesar
2. **HTTPS Only**: Nunca uses HTTP para webhooks en producción
3. **Whitelist IPs**: Acepta solo desde IPs conocidas del proveedor
4. **Rate Limiting**: Protege contra ataques de webhook flooding
5. **Secret Rotation**: Rota secrets regularmente

**⚙️ Implementación Pro:**
- **Idempotency Keys**: Usa event IDs para evitar procesamiento duplicado
- **Queue Processing**: Envía a queue (SQS, RabbitMQ) para procesamiento async
- **Dead Letter Queue**: Captura eventos que fallan después de N reintentos
- **Monitoring**: Alerta si webhooks fallan consistentemente
- **Replay Capability**: Permite reejecutar eventos históricos

**💡 Tips de Producción:**
- Responde 200 OK inmediatamente, procesa async después
- Implementa exponential backoff para reintentos
- Logea TODOS los webhooks recibidos para debugging
- Considera usar webhook.site para testing local
- Usa ngrok para exponer localhost durante desarrollo

**🆚 Webhooks vs WebSockets:**
- Webhooks: Server → Server, event-driven, HTTP
- WebSockets: Bidireccional, persistent connection, real-time chat

**Ejemplo del código:**
- Verificación de signature con crypto
- Switch/case para diferentes event types
- Error handling y status codes apropiados
- Pattern recomendado por Stripe, GitHub, etc"
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
