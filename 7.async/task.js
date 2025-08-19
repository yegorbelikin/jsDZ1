class AlarmClock {
    constructor (alarmCollection = [], intervalId = null){
      this.alarmCollection = alarmCollection;
      this.intervalId = intervalId;
    }
  
    addClock(time, callback){
      if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
      }
  
      if (this.alarmCollection.some(alarm => alarm.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
      }
  
      const canCallObject = {time, callback, canCall: true};
      this.alarmCollection.push(canCallObject); 
    }
  
    removeClock(time){
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
    getCurrentFormattedTime() {
      const currentDate = new Date();
      let currentHours = currentDate.getHours();
      let currentMinutes = currentDate.getMinutes();
      return `${currentHours}:${currentMinutes}`
    }
  
    start() {
      if (!!this.intervalId){
        return;
      }
      this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(alarm => {
          if (alarm.time === currentTime && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000)
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    resetAllCalls() {
      this.alarmCollection.forEach(alarm => {
        alarm.canCall = true;
      });
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  
    
  
  }
  