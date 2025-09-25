// Authentication middleware
import { NextRequest, NextResponse } from 'next/server';
import { RequestContext } from '@/types';

export function authenticate(request: NextRequest): RequestContext {
  // Extract user information from request
  const userId = request.headers.get('x-user-id') || undefined;
  const sessionId = request.headers.get('x-session-id') || undefined;
  const ip =
    request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';

  return {
    userId: userId || undefined,
    sessionId: sessionId || undefined,
    ip,
    userAgent,
  };
}

export function requireAuth(request: NextRequest): NextResponse | null {
  const context = authenticate(request);

  if (!context.userId) {
    return NextResponse.json(
      { error: 'Unauthorized', message: 'Authentication required' },
      { status: 401 }
    );
  }

  return null;
}
