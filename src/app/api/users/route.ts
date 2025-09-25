import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '../../backend/middleware/auth';

// GET /api/users - Get all users
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authError = requireAuth(request);
    if (authError) return authError;

    // Mock user data - replace with actual database query
    const users = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: new Date(),
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        createdAt: new Date(),
      },
    ];

    return NextResponse.json({
      data: users,
      success: true,
      message: 'Users retrieved successfully',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', message: 'Failed to retrieve users' },
      { status: 500 }
    );
  }
}

// POST /api/users - Create a new user
export async function POST(request: NextRequest) {
  try {
    const authError = requireAuth(request);
    if (authError) return authError;

    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Bad Request', message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Mock user creation - replace with actual database insert
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date(),
    };

    return NextResponse.json(
      {
        data: newUser,
        success: true,
        message: 'User created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', message: 'Failed to create user' },
      { status: 500 }
    );
  }
}
