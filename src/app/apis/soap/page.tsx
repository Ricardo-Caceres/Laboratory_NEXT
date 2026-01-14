import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function SOAPPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="SOAP (Simple Object Access Protocol)"
        description="**SOAP** is a protocol for exchanging structured information in web services using XML. It's platform and language independent.

**Key Features:**
- **XML-based**: All messages in XML
- **Protocol**: Strict standards (WS-*)
- **WSDL**: Web Services Description Language
- **Built-in security**: WS-Security
- **ACID compliance**: Transactions

**SOAP Message Structure:**
- Envelope (required)
- Header (optional)
- Body (required)
- Fault (optional)

**Use Cases:**
- Enterprise applications
- Banking systems
- Payment gateways
- Legacy system integration
- High-security requirements"
        codeContent={[
          {
            filePath: 'soap/request.xml',
            content: `<?xml version="1.0"?>
<soap:Envelope 
  xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
  xmlns:web="http://www.example.com/webservice">
  
  <soap:Header>
    <web:Authentication>
      <web:Username>user123</web:Username>
      <web:Password>pass123</web:Password>
    </web:Authentication>
  </soap:Header>
  
  <soap:Body>
    <web:GetUserDetails>
      <web:UserId>12345</web:UserId>
    </web:GetUserDetails>
  </soap:Body>
  
</soap:Envelope>`,
          },
          {
            filePath: 'soap/response.xml',
            content: `<?xml version="1.0"?>
<soap:Envelope 
  xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  
  <soap:Body>
    <web:GetUserDetailsResponse>
      <web:User>
        <web:Id>12345</web:Id>
        <web:Name>John Doe</web:Name>
        <web:Email>john@example.com</web:Email>
      </web:User>
    </web:GetUserDetailsResponse>
  </soap:Body>
  
</soap:Envelope>`,
          },
          {
            filePath: 'soap/client.ts',
            content: `import { parseString } from 'xml2js';

interface SOAPRequest {
  method: string;
  params: Record<string, any>;
}

export async function callSOAPService(
  url: string,
  request: SOAPRequest
): Promise<any> {
  const soapEnvelope = \`
    <?xml version="1.0"?>
    <soap:Envelope 
      xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
      <soap:Body>
        <\${request.method}>
          \${Object.entries(request.params)
            .map(([key, value]) => \`<\${key}>\${value}</\${key}>\`)
            .join('\\n')}
        </\${request.method}>
      </soap:Body>
    </soap:Envelope>
  \`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml',
      'SOAPAction': request.method,
    },
    body: soapEnvelope,
  });

  const xmlResponse = await response.text();
  
  return new Promise((resolve, reject) => {
    parseString(xmlResponse, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">SOAP vs REST</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-3">SOAP</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Protocol (strict)</li>
                <li>✓ XML only</li>
                <li>✓ Built-in security</li>
                <li>✓ ACID compliance</li>
                <li>✓ Stateful operations</li>
                <li>✗ More complex</li>
                <li>✗ Slower performance</li>
              </ul>
            </div>
            
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-3">REST</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Architectural style</li>
                <li>✓ Multiple formats (JSON, XML)</li>
                <li>✓ Simpler</li>
                <li>✓ Better performance</li>
                <li>✓ Stateless</li>
                <li>✗ Manual security</li>
                <li>✗ No built-in error handling</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">SOAP Message Structure:</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Envelope:</strong> Root element</p>
              <p><strong>Header:</strong> Authentication, metadata</p>
              <p><strong>Body:</strong> Request/response data</p>
              <p><strong>Fault:</strong> Error information</p>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}
