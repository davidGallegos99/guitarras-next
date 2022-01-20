import styles from  '../styles/Blog.module.css'
import Entrada from './Entrada';

export const ListadoBlog = ({
    result
}) => {
  return (
      <div>
          <h2 className="heading">Blog</h2>
                <div className={styles.blog}>
                    {
                        result.map(entrada => (
                            <Entrada 
                                key={entrada.id}
                                {...entrada}
                            />
                        ))
                    }
                </div>
      </div>
  )
};
