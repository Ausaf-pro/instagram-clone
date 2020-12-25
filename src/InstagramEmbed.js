import { Avatar } from '@material-ui/core'
import React from 'react'
import './InstagramEmbed.css'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import PublishIcon from '@material-ui/icons/Publish';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

function InstagramEmbed({username}) {
   return (
      <div className="instagramEmbed" >
         <div className="instagramEmbed__header">
            <Avatar 
               className="instagramEmbed__avatar"
               src="/static/imagex/avatar"   
            />
            <h3>InstagramEmbed</h3>
            <button className="instagramEmbed__profileButton">View Profile</button>
         </div>

         <img
            className="instagramEmbed__image"
            src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-235872,resizemode-1,msid-78473675/news/international/business/dubai-based-construction-firm-which-helped-in-building-burj-khalifa-to-enter-liquidation.jpg" />
            <div className="instagramEmbed__drop">
               <a>View more on Instagram</a>
               <div className="instagramEmbed__dropIcon">
                  <FavoriteOutlinedIcon className="innerIcon red"/>
                  <ModeCommentOutlinedIcon className="innerIcon" />
                  <PublishIcon className="innerIcon"/>
                  <BookmarkBorderOutlinedIcon className="instagramEmbed__dropIconBookmark"/>

               </div>
            </div>
            
         <h4 className="instagramEmbed__text" ><strong>InstagramEmbed</strong> E M M A R</h4>
      </div>
   )
}

export default InstagramEmbed
