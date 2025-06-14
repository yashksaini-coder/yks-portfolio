import { Noto_Sans_Devanagari } from 'next/font/google';

const notoHindi = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '700'],
});

export default function HindiText({ className, text }: { className?: string, text: string }) {
  if (!text) {
    return null; // Return null if no text is provided
  }
  // Ensure the text is a string
  if (typeof text !== 'string') {
    console.error('HindiText component expects a string as text prop');
    return null; // Return null if text is not a string
  }
  
  return (
    <div className={`${notoHindi.className} ${className}`}>
      <p>{text}</p> 
    </div>
  );
}
