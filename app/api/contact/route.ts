import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the data (in a real app, send to email/CRM)
    console.log('Received contact form submission:', body);

    // Simulate slight network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
