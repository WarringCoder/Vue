<template>
    <div class="FormProjects">
        <h2>Form Projesi</h2>  
        <form >
            <label>Email:</label>
            <input type="email" v-model="email" required>
            <label>Şifre:</label>
            <input type="password" v-model="password">
            <label>Bildiğiniz Yazılım Dilleri:</label>
            <input type="text" v-model="skill" @keyup.ctrl="addSkill($event)">
            <div class="skillItemContainer">
                <div class="SkillItem" v-for="skillItem in skills" :key="skillItem">
                    <span @click="deleteSkill(skillItem)">{{ skillItem }}</span>
                </div>
            </div>
            <label>Cinsiyet</label>
            <select v-model="gander">
                <option value="">Seçiniz</option>
                <option value="male">Erkek</option>
                <option value="female">Kadın</option>
            </select>
            <div class="term">
                <input type="checkbox" v-model="term" required>
                <label> Kullanım Koşullarını Kabul Ediyorum</label>
            </div>
            <div class="btnDiv">
                <button>Kaydol</button>
            </div>
        </form>
    </div>
       
</template>

<script>
    
    export default {
        data(){
            return{
                email: 'asd@gmail.com',
                password:'',
                gander:'',
                term:false,
                skill:'',
                skills:[]
            }
        },
        methods:{
            addSkill(e){
                if(e.key === ',' && this.skill)
                {
                    if(!this.skills.includes(this.skill))
                    {
                        this.skills.push(this.skill)
                    }
                    this.skill=''
                }
            },
            deleteSkill(skill){
                this.skills=this.skills.filter(item =>{
                    return skill !== item;
                })
            }
        }
    }
</script>

<style>
    .FormProjects{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        background-color: rgb(95, 158, 160);
        width: 34%;
        padding: 4.3rem 0;
        margin: 8.8rem auto 0 auto;
        border-radius: 2rem;
    }
    .FormProjects h2{
        color: rgb(0, 0, 0);
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        padding: 0 2rem;

    }
    input{
        width: 23rem;
        height: 2rem;
        border-radius:0.6rem;
        border:none;
    }
    label{
        color:rgb(0, 0, 0);
        font-size:1.1rem;
    }
    .term input{
        width: 1rem;
        height: 1rem;
        border-radius:0.6rem;
        border:none;
    }
    .btnDiv{
        margin-top:2rem;
        text-align:center;
    }
    .btnDiv button
    {
        padding:0.6rem 1.6rem;
        border:none;
        border-radius:0.6rem;
        background-color:rgba(124, 17, 17, 0.693);
        color:white;
    }
    .btnDiv button:hover
    {
        opacity: 0.7;
        cursor:pointer;
    }
    .skillItemContainer
    {
        display:flex;
    }
    .SkillItem
    {
        margin-top:1rem;
        margin-bottom:1rem;
    }
    .SkillItem span
    {
        background-color:rgba(232, 232, 232, 0.821);
        padding:0.4rem 0.8rem;
        border-radius: 4rem;
        margin-right:0.3rem;
    }
</style>
