<template>
    <el-form  status-icon label-width="100px" class="demo-ruleForm login">
        <el-form-item label="用户名" prop="pass">
            <el-input type="text" v-model="user" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="pwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
          user: '',
          pwd: ''
      };
    },
    methods: {
      submitForm() {
        fetch('/api/signIn',{


            method:'POST',
            credentials:'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'user='+this.user+'&pwd='+this.pwd,
        }).then(res=>{
            res.json().then(data=>{
                if(data.code){
                    console.log(data);
                    this.$store.commit('IS_LOGIN',data.msg[0]);
                    window.localStorage.setItem('user',JSON.stringify(data.msg[0]))
                    this.$router.push({
                        path:this.$route.query.successUrl
                    })
                }
            })
        })
      },
      resetForm() {
        this.user='';
        this.pwd='';
      }
    }
  }
</script>
<style scoped>
.login{
    margin:100px auto;
    min-width: 300px;
    width:50%;
}
</style>
