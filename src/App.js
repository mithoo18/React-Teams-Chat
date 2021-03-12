import { ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


const App =() => {
 if(!localStorage.getItem('username'))
    return <LoginForm/>
 
 
    return(
        
        <ChatEngine 
        height="100vh"
        projectID ="2050bfa7-d6ed-4ef7-8da1-9c98de8a994b"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};
export default App;