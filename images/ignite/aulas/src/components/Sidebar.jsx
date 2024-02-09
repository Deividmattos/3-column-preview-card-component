

import styles from './Sidebar.module.css';

export function Sidebar(){
      return(
          <aside className={styles.sidebar}>
                 <img className={styles.cover} 
                 src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="" />  
                   
                   <div className={styles.profile}>
                     <img className={styles.avatar} src="./img/foto.jpg"/>
                        <strong>Deivid de Mattos Silva</strong>
                        <span>Web Developer</span>
                   </div>
                   <footer>
                   
                        <a href="#">Editar o seu perfil</a>
                   </footer>
         </aside>
      );
}