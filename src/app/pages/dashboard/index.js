import Icon from './icon';
import './styles.css'

export const Dashboard = (props) => {
    
    return (
        <div className='dashboard'>
            <nav>
                <Icon/> <h1>Kanban</h1>
            </nav>
           <main>
                <div className='content'>
                    {props.children}
                </div>
           </main>
        </div>
    )
}