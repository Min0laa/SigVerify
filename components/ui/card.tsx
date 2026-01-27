// components/ui/card.tsx
import React from 'react';

export const Card = ({ children, className }: any) => <div className={`bg-white shadow rounded-lg p-4 ${className}`}>{children}</div>;

export const CardHeader = ({ children }: any) => <div className="border-b border-gray-200 pb-2 mb-4">{children}</div>;

export const CardTitle = ({ children }: any) => <h2 className="text-xl font-semibold">{children}</h2>;

export const CardDescription = ({ children }: any) => <p className="text-sm text-gray-600">{children}</p>;

export const CardContent = ({ children }: any) => <div>{children}</div>;
