import { Header, NaigationLink } from './Navigation.styled';

const Navigation =()=>{

    return(
        <Header>
            <NaigationLink to="/">Відслідкувати Посилку</NaigationLink>
            <NaigationLink to="/departaments">Знайти відділення</NaigationLink>

        </Header>

    )
}


export default Navigation