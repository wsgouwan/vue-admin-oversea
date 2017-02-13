<template>
    <el-row class="wrap">
        <div class="table-title">
            用户反馈
            <el-button :type="order_type == 0 ? 'success' : ''">时间排序</el-button>
            <el-button :type="order_type == 0 ? '' : 'success'">未回复排序</el-button>
        </div>
        <!--  表单  -->
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                fixed
                prop="create_time"
                :formatter="formatDate"
                label="时间"
                width="120">
            </el-table-column>
            <el-table-column
                prop="device"
                label="设备"
                width="110">
            </el-table-column>
            <el-table-column
                prop="sys_version"
                label="系统"
                width="100">
            </el-table-column>
            <el-table-column
                prop="app_version"
                label="版本"
                width="100">
            </el-table-column>
            <el-table-column
                label="ID&昵称"
                width="120">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.user_id}}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="反馈详情"
                width="360">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.content}}</span>
                    <img class="detailsPic" :src="scope.row.pic">
                </template>
            </el-table-column>
            <el-table-column
                label="状态"
                width="100">
                <template scope="scope">
                    <span style="margin-left: 10px">{{scope.row.state == 0 ? '未回复' : scope.row.state == 1? '已回复':'已完成'}}</span>
                </template>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="反馈回复"
                width="100">
                <template scope="scope">
                    <el-button type="text" size="small">回复</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-row>
</template>
<style rel="stylesheet/scss" lang="scss">
    .wrap{
        padding: 12px;
    }
    .table-title{
        margin-bottom: 12px;
    }
    th{
        text-align: center !important;
    }
    .detailsPic{
        max-width: 100px;
    }
</style>
<script type="text/ecmascript-6">
    import {feedback} from '../../../assets/scripts/api/index';
    import utils from '../../../assets/scripts/utils/index';


    export default{
        data(){
            return{
                'order_type': 0,
                'tableData': [],
                'noreply_count': null
            }
        },

        methods: {
            formatDate(row, column) {
                return utils.formatDate.format(new Date(row.create_time))
            },
            filterState(value, row) {
                return row.state == value;
            }
        },

        mounted() {
            feedback({
                'order_type': 0,
                'pagenum': 1,
                'pagesize': 10
            }).then( res => {
                let data = res.data;
                this.tableData = data.feedbacks;
            } )
        },

        components:{

        }
    }
</script>
