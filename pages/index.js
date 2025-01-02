import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <Link href="/vehicle-details" legacyBehavior>
        <a>Go to Vehicle Details</a>
      </Link>
    </div>
  );
}
