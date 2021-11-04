let hours = document.querySelector('.hours_input');
let minutes = document.querySelector('.minutes_input');
let seconds = document.querySelector('.seconds_input');

let start = document.querySelector('.start_btn');
let pause = document.querySelector('.pause_btn');
let stop = document.querySelector('.stop_btn');
let reset = document.querySelector('.reset_btn');
let clear = document.querySelector('.clear_btn');

let h_out = document.querySelector('.h_out');
let m_out = document.querySelector('.m_out');
let s_out = document.querySelector('.s_out');

let h = 0;
let m = 0;
let s = 0;

hours.addEventListener('change', function(){
    h = +hours.value;
    h_out.innerText = h;
    t1.h = h
});

minutes.addEventListener('change', function(){
    m = +minutes.value;
    m_out.innerText = m;
    t1.m = m
});

seconds.addEventListener('change', function(){
    s = +seconds.value;
    s_out.innerText = s;
    t1.s = s
});

class Timer{
    constructor(hours, minutes, seconds){
        this.h = hours;
        this.m = minutes;
        this.s = seconds;
        this.interval;
        this.state = false;
    };

    tick(){
        console.log(this);
        if(!(this.h==0 && this.m==0 && this.s==0)){
            if(this.s>0){
                this.s--;
            }
            else if(this.m>0){
                this.m--;
                this.s = 59;
            }
            else if(this.h>0){
                this.h--;
                this.m = 59;
                this.s = 59;
            }
        }
        else{
            alert('Время вышло');
            clearInterval(this.interval);
        };
        h_out.innerHTML = this.h;
        m_out.innerHTML = this.m;
        s_out.innerHTML = this.s;
    };

    start(){
        if (this.state == false){
            console.log(this);
            this.interval = setInterval(()=>{this.tick()},1000);
        };
        this.state = true;
        console.log(this.state);
        console.log(t1);
    };

    pause(){
        console.log(this);
        clearInterval(this.interval);
        this.state = false;
        console.log(t1);
    };

    stop(){
        clearInterval(this.interval);
        this.h = 0;
        this.m = 0;
        this.s = 0;
        h_out.innerHTML = this.h;
        m_out.innerHTML = this.m;
        s_out.innerHTML = this.s;
        this.state = false;
        console.log(t1);
    };

    reset(){
        this.h = h;
        this.m = m;
        this.s = s;
        h_out.innerHTML = this.h;
        m_out.innerHTML = this.m;
        s_out.innerHTML = this.s;
        this.state = false;
        console.log(t1);
    };

    clear(){
        this.h = 0;
        this.m = 0;
        this.s = 0;
        h_out.innerHTML = this.h;
        m_out.innerHTML = this.m;
        s_out.innerHTML = this.s;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        this.state = false;
        console.log(t1);
    };
};

let t1 = new Timer(h, m, s);

console.log(t1);

start.addEventListener('click', function(){
    t1.start();
});
pause.addEventListener('click', function(){
    t1.pause();
});
stop.addEventListener('click', function(){
    t1.stop();
});
reset.addEventListener('click', function(){
    t1.reset();
});
clear.addEventListener('click', function(){
    t1.clear();
});