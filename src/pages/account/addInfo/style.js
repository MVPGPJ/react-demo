import addHeadImg from 'assets/images/account/addheadbtn.png'
const style = {
  title: {
    fontSize: '0.18rem',
    color: '#333',
    lineHeight: '0.2rem',
    paddingTop: '0.44rem', 
  },
  tip: {
    fontSize: '0.14rem',
    width: '125%',
    color: '#999',
    marginTop: '0.03rem',
    lineHeight: '0.4rem',
    transformOrigin: 'left center',
    transform: 'scale(0.75)'
  },
  headWrap: {
    width: '1rem',
    height: '1rem',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
  },
  headCover: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: `url(${addHeadImg})`,
    backgroundSize: '0.41rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: '1'
  }
}

export default style