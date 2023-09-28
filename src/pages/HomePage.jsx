import logo from "../components/picture/logo.png"

const styles = {
    container: {
      width: 1400,
      minHeigth: 'calc(100vh-50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 250,
      paddingLeft: 25,
      paddingRight: 25,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: 48,
      textAlign: 'center',
      marginRight: 30,
      color: ' #3470ff',
    },
    img: {
      display: 'block',
      width: 150,
      marginRight: 30,
    },
  };

export const HomePage = () => {
    return (
      <div style={styles.container}>
        <img src={logo} alt="logo" style={styles.img}/>
        <h1 style={styles.title}>Rent car</h1>
      </div>
    );
  };
  
  
 