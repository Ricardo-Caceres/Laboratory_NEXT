import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filePath = searchParams.get('path');
    
    if (!filePath) {
      return NextResponse.json({ error: 'File path is required' }, { status: 400 });
    }

    // Security: Only allow files within src directory
    if (!filePath.startsWith('src/')) {
      return NextResponse.json({ error: 'Invalid file path' }, { status: 403 });
    }

    const fullPath = path.join(process.cwd(), filePath);
    const content = readFileSync(fullPath, 'utf-8');

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json(
      { error: 'File not found or cannot be read' },
      { status: 404 }
    );
  }
}
