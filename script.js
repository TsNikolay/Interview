const App = {
    data() {
        return {
            day: "01",
            mounth: "01",
            range: "",
        }
    },
    methods: {
        dropdownChangePlus() {
            if (this.range  < document.querySelectorAll('#rngMenu option').length - 1) {
                this.range++;
            }
        },

        dropdownChangeMinus() {
            if (this.range  > 1 ) {
                this.range--;
            }
        },

        //The following 6 functions contain "magic numbers", these are the numbers of months or days in the calendar. 
        //Digits 9 and 10 are added to check single digit from double digit number

        plusDay() {
            if (this.day < 9 && this.day.toString().length <= 2 ) {
                this.day = "0" + (Number(this.day) + 1);
            } else {
                this.day = Number(this.day) + 1;
            }
        },

        minusDay() {
            if( this.day <= 10 && this.day.toString().length <= 2 ) {
                this.day = "0" + (Number(this.day) - 1);
            } else {
                this.day = Number(this.day) - 1;
            }
        },

        plusMounth() {
            if (this.mounth < 9 && this.mounth.toString().length <= 2 ) {
                this.mounth = "0" + (Number(this.mounth) + 1)
            } else {
                this.mounth = Number(this.mounth) + 1
            }
        },

        minusMounth() {
            if (this.mounth <= 10 && this.mounth.toString().length <= 2 ) {
                this.mounth = "0" + (Number(this.mounth) - 1)
            } else {
                this.mounth = Number(this.mounth) - 1
            }
        },

        plusDate() {
            if (this.mounth == 12 && this.day == 31) { 
                this.mounth = "01"
                this.day = "01"
            } else {
                if (this.day == "28" && this.mounth == "02"){
                    this.day = "00"
                    this.plusMounth();
                }   
                else if (this.day == "30" && (this.mounth == "04" || this.mounth == "06" || this.mounth == "09" || this.mounth == "11")){
                    this.day = "00"
                    this.plusMounth();
                }
                else if (this.day == "31"){
                    this.day = "00"
                    this.plusMounth();
                }
                this.plusDay()
            }
        },

         minusDate(){
            if (this.day == "01" && this.mounth == "01"){
                this.day = "31"
                this.mounth = "12"
            } else {
                this.minusDay()
                if (this.day == 0 && this.mounth > 0){
                    if(this.mounth == "03"){
                        this.day = "28"
                        this.minusMounth();
                    }
                    else if (["05","07","10","12"].includes(this.mounth)){
                        this.day = "30"
                        this.minusMounth();
                    }
                    else {
                        this.day = "31"
                        this.minusMounth();
                    }
                }
            }
        }
    }
}

Vue.createApp(App).mount('#app')