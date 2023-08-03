import { NavLink } from 'react-router-dom';

const Navigation =()=>{

    return(
        <header>
            <NavLink to="/">Відслідкувати Посилку</NavLink>
            <NavLink to="/departaments">Знайти відділення</NavLink>

        </header>

    )
}


export default Navigation