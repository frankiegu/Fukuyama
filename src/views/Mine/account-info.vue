<template>
    <div>
        <van-cell :border="false" title="头像"/>
        <van-row type="flex" justify="center">
            <van-col span="6">
                <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead"/>
            </van-col>
            <van-col span="6"></van-col>
            <van-col span="6"></van-col>
        </van-row>
    </div>

</template>

<script>
    export default {
        name: "account-info",
        data() {
            return {
                fileList: [
                    // {},
                    // Uploader 根据文件后缀来判断是否为图片文件
                    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                    // {url: 'https://cloud-image', isImage: true}
                ]
            }
        }
        ,


        methods: {
            afterRead(file) {


                // 此时可以自行将文件上传至服务器
                console.log(file);

                // console.log(file.status);
                // console.log(file.content);

                // var a = new FormData()
                // a.append('fff',file)
                // var a = {'name':file.file.name,'fff':file.content}
                // console.log(a);
                let content = file.file;
                // console.log(file.file);

                let data = new FormData();
                data.append('img', content);//复制代码
                data.append('name', file.file.name)

                this.$store.dispatch("upload_avatar", data).then(res => {
                    console.log(res);
                    localStorage.setItem('avatar',res.data.src)
                    this.$store.commit("SET_AVATAR",res.data.src)

                })


            }
        }
    }
</script>

<style scoped>

</style>