import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://ae01.alicdn.com/kf/Sc6566d3f8b07414ebb5900d0c244162dr/Super-Heroes-ve-culo-Diecast-carro-1989-batcelulares-modelo-de-metal-luz-e-som-puxar-brinquedos.jpg_.webp ">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
