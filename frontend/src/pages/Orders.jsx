import React from 'react';

export default function Orders() {
  return (
    <section className="bg-surface border border-border rounded-xl p-12 text-center shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-primary mb-3">
        Orders
      </span>
      <h1 className="text-2xl font-bold text-text">Coming Soon</h1>
      <p className="text-sm text-secondary mt-2">
        Order creation, status updates, and order history will be available here.
      </p>
    </section>
  );
}
