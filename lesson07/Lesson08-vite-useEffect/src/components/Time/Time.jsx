import React,{useState,useEffect} from 'react'

function Time() {
  const [time, setTime] = useState({})
  const useCurrentCallback = (callback) => {
    const reference = React.useRef();
    reference.current = callback;
    return (...args) => {
      return reference.current?.(...args);
    };
  };
  const currentCallback = useCurrentCallback(() => {
    const date = new Date();
    setTime({
      hour: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds()
    });
  });
  useEffect(() => {
    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, [])
  
  let secs = Number(time.secs)
  if (secs.toString().length == 1) {
    secs = '0' + secs.toString()
  }
  return (
    <div>
      <h1>Thời Gian: {time.hour} : {time.mins} : {secs} </h1>
    </div>
  )
}

export default Time