
import {useState} from 'react';
import {sendMessage,isTyping} from 'react-chat-engine'; 
import {sendOutlined,PicturOutlined, PictureOutlined} from '@ant-design/icons';

const MessageForm =(props)=> {
    const [value,setValue]  = useState(''); 
    const {chatId,creds} = props;

    const handleChange =(event)=>{
        setValue(event.target.value);
        isTyping(props,chatId);
    };

    const handleSubmit = (event) =>{
    event.preventDefault();
    
    const text = value.trim();
    
    if(text.length > 0 ){ 
    sendMessage(creds,chatId,{text});
    }
    setValue('');
    };

    const handleUpload = (event)=>{
        sendMessage(creds,chatId,{files:event.target.files,text: ''})
    };

    return(
        <form className = "message-form" onSubmit={handleSubmit}>
            <input className ="message-input"
                placeholder ="Send A Message"
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}/>
            <label htmlFor="upload-button">
                <span className="image-button"></span>
                <PictureOutlined className ="picture-icon"/>
            </label>
            <input
            
                type="file"
                multiple={false}
                id="upload-button"
                style={{display: 'none'}}
                onChange= {handleUpload}
                />
                <button type = "submit" className="send-button">
                    <sendOutlined className="send-icon"/>
                </button>
        </form>
    );
};
export default MessageForm;