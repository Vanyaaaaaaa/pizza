import ContentLoader from 'react-content-loader';

export function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      {' '}
      <circle cx="141" cy="124" r="106" />{' '}
      <rect x="5" y="247" rx="10" ry="10" width="279" height="24" />{' '}
      <rect x="4" y="286" rx="10" ry="10" width="279" height="80" />{' '}
      <rect x="120" y="386" rx="30" ry="30" width="160" height="44" />{' '}
      <rect x="4" y="395" rx="10" ry="10" width="92" height="27" />{' '}
    </ContentLoader>
  );
}
