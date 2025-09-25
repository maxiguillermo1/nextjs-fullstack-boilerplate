import { NextRequest, NextResponse } from 'next/server';

// POST /api/auth/login - User login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Bad Request', message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Mock authentication - replace with actual authentication logic
    if (email === 'admin@example.com' && password === 'password') {
      const token = 'mock-jwt-token-' + Date.now();
      
      return NextResponse.json({
        data: {
          token,
          user: {
            id: '1',
            name: 'Admin User',
            email: 'admin@example.com'
          }
        },
        success: true,
        message: 'Login successful'
      });
    } else {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', message: 'Login failed' },
      { status: 500 }
    );
  }
}
