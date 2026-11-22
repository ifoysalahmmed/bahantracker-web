interface LogoProps {
  size: number;
}

const MARK_SRC = '/bahantracker-mark.png';
const MARK_RATIO = 159 / 146;

const WORDMARK_SRC = '/bahantracker-logo.png';
const WORDMARK_RATIO = 874 / 185;

const Mark = ({ size }: LogoProps) => (
  <img
    src={MARK_SRC}
    width={Math.round(size * MARK_RATIO)}
    height={size}
    alt=""
    aria-hidden="true"
    style={{ display: 'block', flexShrink: 0 }}
  />
);

export const LogoMark = Mark;

export const LogoFull = Mark;

export const LogoWordmark = ({ size }: LogoProps) => (
  <img
    src={WORDMARK_SRC}
    width={Math.round(size * WORDMARK_RATIO)}
    height={size}
    alt="BahanTracker"
    style={{ display: 'block', flexShrink: 0 }}
  />
);

export const LogoRoad = () => (
  <img
    src={MARK_SRC}
    width="100%"
    height="100%"
    alt=""
    aria-hidden="true"
    style={{ display: 'block', objectFit: 'contain', opacity: 0.14 }}
  />
);
