import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  

    root:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        fontFamily:'Montserrat, sans-serif !important',
        alignItems:'center',
        //  backgroundColor:' rgba(0, 126, 255, 0.025)',
         overflowY:'hidden',
        
        
         [theme.breakpoints.down('sm')]:{
              height:'auto',
              minHeight:'100vh',
              overflowX:'hidden',
    
        },
    
       
    },
    margin: {
        
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'1rem !important',
    
      },
      margi:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      },
      icon:{
        color: '#005FC0',
        fontSize:'1.3rem',
        marginRight:'1.5rem !important',
        cursor:'pointer',
      },
      input:{
          width:'100%',
          marginTop:'1rem',
          fontFamily:'Montserrat, sans-serif !important',
      },
      mar:{
    width:'100%',
    height:'inherit'
      },
    
    
    loginContainer : {
        background: 'rgba(196, 196, 196, 0.1)',
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.15)',
        width:'46.8%',
        minHeight:'55%',
        // height:'48.92%',
        height:'auto',
        [theme.breakpoints.down('sm')]:{
          width:'100%',
          height:'auto',
          background:'transparent',
          boxShadow:'none',
        },
    
    },
    
    loginForm:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
              width:'100%',    
        },
    },
    
    email:{
        width:'100%',
    },
    
    subtitle:{
        textAlign:'center !important',
        marginBottom:'1rem !important',
        fontFamily:'Montserrat, sans-serif !importtant',
    },
    
    loginTitle:{
        textAlign:'center !important',
        marginBottom:'0.43rem !important',
        fontFamily:'Montserrat, sans-serif !important ',
        fontWeight:'600',
        fontSize:'20px',
        marginTop:'2rem',
        color:'rgba(0,0,0,1)',

    },
    
    
    btned:{
        backgroundColor:'#005FC0 !important' ,
        
        marginTop:'3rem !important',
        display:'flex !important',
        justifyContent:'center',
        color:'#fff !important',
        fontFamily:'Montserrat, sans-serif !important',
        width:'15.5rem !important',
        fontWeight:'bold !important',
        marginBottom:'0.75rem !important',
        textTransform:'none !important',
        '&:hover':{
            backgroundColor: '#005fc0 !important',
          },
          [theme.breakpoints.down('sm')]:{
              
          },
    
    },
    termsContainer:{
    display:'flex',
    flexDirection:'row',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    color:'#000000',
    marginBottom:'2rem',
    fontSize:'13px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'0.8rem !important',
    }
    },
    terms:{
        textDecoration:'none',
        color:'#007eff',
    fontSize:'13px',
    marginLeft:'0.2rem',
    [theme.breakpoints.down('sm')]:{
        fontSize:'0.8rem !important',
    },
        
        '&:hover':{
            color:'#007eff',
    
        }
    
    },
    logoImg:{
        [theme.breakpoints.down('sm')]:{
            width:'30%',
            height:'auto',
    
        },
        width:'143px',
        height:'57px',
        marginBottom:'1.25rem',
    
    },
    formItem:{
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            display:'grid',
            placeItems:'center',
        },
        width:'74.8%',
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
    },
    lText:{
        fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '100 !important',
    opacity: '1',
    fontSize: '13px',
    lineHeight: '16px',
    textAlign:'center',
    marginBottom:'1.7rem',
    width:'50%',
    [theme.breakpoints.down('sm')]:{
        width:'90%',
    },
    
    color: 'rgba(0, 0, 0, 0.5)',
    },
    
    checkContainer:{
        display:'flex',
        marginTop:'1.625rem',
        fontSize:'13px !important',
        marginLeft:'5.43rem !important',
        marginBottom:'2rem',
        width:'74.8%',
        [theme.breakpoints.down('sm')] :{
            marginLeft:'1.5rem !important',
        }
    },
    checkItem:{
        marginRight:[theme.spacing(1)],
        color:'#122fc0', 
        height:'16px',
        width:'16px',
        alignItems:'center'
    },
    
    fPass:{
    color:'#007EFF',
    fontFamily: 'Montserrat',
    fontSize:'13px !important',
    marginTop:'0rem',
    textDecoration:'none',
    
    },
    fpContainer:{
        display:'flex',
        justifyContent:'center',
        marginBottom:'2.69rem !important'
    },
    loginButton:{
        width:'100%',
        height:'auto',
        display:'flex',
        justifyContent:"center",
    },
    errorMsg: {
        color: 'rgba(201, 30, 30, 0.7)',
        fontSize:'13px',
        fontWeight:'400',
        textAlign:'center',
        marginBottom:'1rem',
    },
    errorP: {
        color: 'rgba(201, 30, 30, 0.7)',
        fontSize:'13px',
        fontWeight:'400',
        textAlign:'left',
        marginBottom:'1rem',
        marginTop:'1rem',
        marginLeft:'7rem',
    },
    emailSentImg:{
        width:"70%",
        height:'auto',
        paddingBottom:'2rem'
    },
    extraSpace:{
        padding:'2rem 0',

    },
    icon :{
        color:'#b7b7b7 !important',
        marginTop:'1rem !important',
        marginRight:'0.5rem !important',
        fontSize:'1.5rem !important',
    },
    iconL :{
        color:'#b7b7b7 !important',
        marginTop:'0 !important',
        marginRight:'0.5rem !important',
        fontSize:'1.5rem !important',
    },
    iconRight:{
        cursor:'pointer !important',
          },
    




      
}));