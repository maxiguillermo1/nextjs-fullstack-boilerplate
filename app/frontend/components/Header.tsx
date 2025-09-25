import React from 'react';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "My App" }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-500 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-500 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-500 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
