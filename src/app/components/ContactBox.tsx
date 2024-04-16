// npm install react-social-icons
import { SocialIcon } from "react-social-icons"

export default function ContactBox({contact}: any){
    return(
        <div className="flex my-5">
            {contact.provider === "facebook" // Social platform icons
            ? 
                <SocialIcon url="www.facebook.com"/>
            : contact.provider === "instagram"
            ?
                <SocialIcon url="www.instagram.com"/>
            : contact.provider === "linkedin"
            ?
                <SocialIcon url="www.linkedin.com"/>
            :
            <p>{contact.provider}</p>
            } 
            <p className="ml-5 self-center font-semibold text-lg">{contact.aliases}</p>
        </div>
    )
}