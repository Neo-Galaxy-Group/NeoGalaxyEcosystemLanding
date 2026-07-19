import { useEffect, useRef } from 'react';

interface DetailModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  planetColor: string;
}

export default function DetailModal({ open, onClose, title, children, planetColor }: DetailModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={dialogRef}
        className="detail-modal relative w-full rounded-2xl max-h-[80vh] overflow-y-auto"
        style={{
          background: 'linear-gradient(135deg, rgba(10,7,32,0.95), rgba(23,15,56,0.9))',
          border: `1px solid color-mix(in srgb, ${planetColor} 35%, transparent)`,
          boxShadow: `0 0 80px -20px ${planetColor}, 0 25px 50px -12px rgba(0,0,0,0.5)`,
          maxWidth: '640px',
          padding: '32px',
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal={true}
        aria-label={title}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[var(--muted)] cursor-pointer font-[var(--font-mono)] text-lg"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h4
          className="font-[var(--font-display)] font-bold text-[1.4rem] mb-6 pr-10"
          style={{ color: planetColor }}
        >
          {title}
        </h4>

        {/* Content */}
        <div className="text-[0.98rem] leading-[1.7] text-[var(--muted)]">
          {children}
        </div>
      </div>
    </div>
  );
}
