<template>
    <div id="index-box">
        <button @click="getData">点我{{$store.state.ages.ages}}</button>
        <ul>
            <li v-for="(item, index) in listData" :key="index">{{item.title}}</li>
        </ul>
        <aa></aa>
    </div>
</template>
<script>
import ajax from 'axios'
import { Toast } from 'mint-ui'
import aa from '../../../components/aa.vue'
export default {
    components: {
        aa
    },
    data () {
        return {
            title: "aaaa",
            listData: []
        }
    },
    mounted () {
        Toast("11111")
    },
    methods: {
        getData () {
            ajax.get('/api/httpData',{
                params: {
                    pageSize: 1,
                    pageNum: 5,
                    treeId: 16,
                    recommend: 1
                }
            }).then(rs => {
                this.listData = Object.assign([], rs.data.data.data.list)
            })
        }
    }
}
</script>

