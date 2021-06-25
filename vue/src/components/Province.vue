<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <h2>各地区人口性别分布</h2>
                <hr><br><br>
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">华东</th>
                        <th scope="col">华北</th>
                        <th scope="col">华南</th>
                        <th scope="col">华中</th>
                        <th scope="col">东北</th>
                        <th scope="col">西南</th>
                        <th scope="col">西北</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(province, index) in provinces" :key="index">
                        <td>{{ province.east}}</td>
                        <td>{{ province.north }}</td>
                        <td>{{ province.south }}</td>
                        <td>{{ province.central}}</td>
                        <td>{{ province.northeast}}</td>
                        <td>{{ province.southwest}}</td>
                        <td>{{ province.northwest}}</td>
                    </tr>
                    <tr>
                        <td><a href="east">查看</a></td>
                        <td><a href="north">查看</a></td>
                        <td><a href="south">查看</a></td>
                        <td><a href="central">查看</a></td>
                        <td><a href="northeast">查看</a></td>
                        <td><a href="southwest">查看</a></td>
                        <td><a href="northwest">查看</a></td>
                    </tr>
                    </tbody>
                </table><br>
                <a href="education">点击查看受教育程度分布</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                provinces: [],
            };
        },
        methods: {
            getProvinces() {
                const path = 'http://localhost:5000';
                axios.get(path)
                    .then((res) => {
                        this.provinces = res.data.provinces;
                    })
                    .catch((error) => {
                        // eslint-disable-next-line
                        console.error(error);
                    });
            },
        },
        created() {
            this.getProvinces();
        },
    };
</script>

<style scoped>

</style>