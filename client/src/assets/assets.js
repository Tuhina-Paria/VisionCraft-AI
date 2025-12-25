import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon2 from './facebook_icon2.svg'
import instagram_icon2 from './instagram_icon2.svg'
import twitter_icon1 from './twitter_icon1.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.jpg'
import image5 from './image5.png'
import image6 from './image6.jpg'
import image7 from './image7.jpg'
import image8 from './image8.jpg'


export const assets = {
    logo,
    logo_icon,
    facebook_icon2,
    instagram_icon2,
    twitter_icon1,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    profile_img_3,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    image2,
    image3,
    image4,
    image4,
    image5,
    image6,
    image7,
    image8
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:'Graphic Designer',
        stars:5,
        text:"I’ve been using this text-to-image generator for nearly 2 months, mainly for my Design. It’s incredibly easy to use and turns simple prompts into stunning visuals, saving me hours of work every week."
    },
    {
        image:profile_img_2,
        name:'Richard Nelson',
        role:'Content Creator',
        stars:4,
        text:"I’ve been using this text-to-image generator for nearly 2 months, mainly for my Instagram content. It’s incredibly easy to use and turns simple prompts into stunning visuals, saving me hours of work every week."
    },
    {
        image:profile_img_3,
        name:'Tom Jackman',
        role:' Graphic Designer',
        stars:5,
        text:"I’ve been using this text-to-image generator for nearly 2 months, mainly for my design. It’s incredibly easy to use and turns simple prompts into stunning visuals, saving me hours of work every week."
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]