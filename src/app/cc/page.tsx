"use client";
// ↑のuse clientをつけるとClient Componentになる

const ClientComponent = () => {
  console.log('ClientComponent'); // このログはブラウザのコンソールに表示される
  return <div>ClientComponent</div>;
};

export default ClientComponent;