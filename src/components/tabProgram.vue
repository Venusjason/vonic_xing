<template>

 <div class="page has-navbar has-tabbar xlbTabProgram" v-nav="navBar" v-tabbar-menu-index="1">
    <div class="page-content padding-top">
      <tabs :tab-items="programTypes" :active-index.sync="activeTabIndex"  :on-tab-changed="changeProgramType"></tabs>

      <div class="filterType">

        <div :class="[{isFilterTypeTap:isShowFilter},'filterTypeTap']"  @click="showFilter"> <i class="ion-funnel"></i>筛选</div>
        
        <div class="allFilterWrap"   v-show="isShowFilter">

          <div class="sections">

            <div class="section"   v-for=" (parsentIndex, select) in programSelects ">
                <p class="sectionName" > {{ select.name}}</p>

                <ul class="clearfix" >
                  
                  <li  v-for="(index, choose) in select.list"  @click="choosed(parsentIndex,index)" :class=" [ select.activeIndex===index ?  'active' :''   ] " >{{ choose.name }}</li>
                </ul>
            </div>
          </div>
            <div class="btns clearfix">

                 <button class="button button-royal reset"  @click="resetChoose">重置</button>
                 <button class="button button-royal sure"  @click="sureChoose">确定</button>
            </div>     
        </div>
      
      </div>


      <!-- 项目列表 -->

      <scroll class="recommendList"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">


        <swiper direction="horizontal" width="100%"  pager-color="#ea5a49" pager-bg-color="#e5e4e3">
              <swiper-item  v-for="item in swiperImgs">
                <img :src="item.img " alt="">
              </swiper-item>        
          </swiper>

          <!-- <div v-for="(index, item) in items" @click="onItemClick(index, item)"
               class="item thin-border" :class="{'item-stable': index % 2 == 0}">
            {{ item }}
          </div> -->
        <program-item :item-info="item"  v-for="(index, item) in itemArr"></program-item>
            
        

      </scroll>   


      
    </div>
  </div>
</template>

<script>
import  programItem from './common/programItem.vue'


var itemArr={
  "bexId": "get_product_detail",
  "kdjson": {
    "time": "47ms",
    "len": 10,
    "flag": "1",
    "items": [{
      "ROWSCOUNT": "69",
      "locktime": "27",
      "img": "/images/20170209/201702091008234685.jpg",
      "counteragent": "1",
      "isdebt": "1",
      "leftdays": "-26",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "到期还本付息",
      "year": "2017",
      "allowinvesttime": "20170209103000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "A",
      "deadlineVal": "27",
      "status": "4",
      "mintenderedsum": "1000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "10",
      "ROWNUM_": "1",
      "prod_cat_name": "固定收益",
      "month": "02",
      "annualrate": "5",
      "israise": "1",
      "day": "09",
      "benefitpertenthousand": "0",
      "deadline": "27",
      "paymentmodevalue": "按日计息,到期还本付息",
      "product_sort": "0",
      "hasinvestamount": "1000000",
      "sorttemp": "9999",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "1000000",
      "id": "b201702091005284285",
      "prod_cat_id": "pc1419313234346",
      "name": "兴陇体验计划2017015",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "30",
      "hour": "10",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "D",
      "djs": "-2436591",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170206/201702061423351327.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-21",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按半年付息 ",
      "year": "2017",
      "allowinvesttime": "20170206143000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "AA",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "50000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "9",
      "ROWNUM_": "2",
      "prod_cat_name": "固定收益",
      "month": "02",
      "annualrate": "6.9",
      "israise": "1",
      "day": "06",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按半年付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "0",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201702061418122513",
      "prod_cat_id": "pc1419313234346",
      "name": "爽口源私募债第三期",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "30",
      "hour": "14",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-2681391",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170203/201702031047148905.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-24",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按季付息 ",
      "year": "2017",
      "allowinvesttime": "20170203120000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "AAA",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "1000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "8",
      "ROWNUM_": "3",
      "prod_cat_name": "固定收益",
      "month": "02",
      "annualrate": "6.8",
      "israise": "1",
      "day": "03",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按季付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "1",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201702031042554770",
      "prod_cat_id": "pc1419313234346",
      "name": "方舟水世界私募债二号",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "00",
      "hour": "12",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-2949591",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170120/201701201031548166.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-38",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按半年付息 ",
      "year": "2017",
      "allowinvesttime": "20170120110000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "AA",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "50000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "9",
      "ROWNUM_": "4",
      "prod_cat_name": "固定收益",
      "month": "01",
      "annualrate": "6.9",
      "israise": "1",
      "day": "20",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按半年付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "1",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201701201027569674",
      "prod_cat_id": "pc1419313234346",
      "name": "爽口源私募债第二期",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "00",
      "hour": "11",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-4162791",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170119/201701190932287464.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-39",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按季付息 ",
      "year": "2017",
      "allowinvesttime": "20170119100000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "A",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "1000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "8",
      "ROWNUM_": "5",
      "prod_cat_name": "固定收益",
      "month": "01",
      "annualrate": "6.8",
      "israise": "1",
      "day": "19",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按季付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "3",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201701190927445058",
      "prod_cat_id": "pc1419313234346",
      "name": "方舟水世界私募债一号",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "00",
      "hour": "10",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-4252791",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170118/201701181121504052.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-40",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按半年付息 ",
      "year": "2017",
      "allowinvesttime": "20170118110000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "AA",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "50000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "9",
      "ROWNUM_": "6",
      "prod_cat_name": "固定收益",
      "month": "01",
      "annualrate": "6.9",
      "israise": "1",
      "day": "18",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按半年付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "2",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201701181018051681",
      "prod_cat_id": "pc1419313234346",
      "name": "爽口源私募债第一期",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "00",
      "hour": "11",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-4335591",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170113/201701131436399569.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-42",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按半年付息 ",
      "year": "2017",
      "allowinvesttime": "20170116140000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "AA",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "50000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "9",
      "ROWNUM_": "7",
      "prod_cat_name": "固定收益",
      "month": "01",
      "annualrate": "7",
      "israise": "1",
      "day": "16",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按半年付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "2",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201701131433311308",
      "prod_cat_id": "pc1419313234346",
      "name": "承威专用车私募债第二期2号",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "00",
      "hour": "14",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-4497591",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170112/201701121435230377.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-46",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按半年付息 ",
      "year": "2017",
      "allowinvesttime": "20170112150000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "A",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "1000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "9",
      "ROWNUM_": "8",
      "prod_cat_name": "固定收益",
      "month": "01",
      "annualrate": "7",
      "israise": "1",
      "day": "12",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按半年付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "9999",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201701121431586978",
      "prod_cat_id": "pc1419313234346",
      "name": "承威专用车私募债第二期1号",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "00",
      "hour": "15",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-4839591",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170110/201701101347124444.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-48",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按半年付息 ",
      "year": "2017",
      "allowinvesttime": "20170110150000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "A",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "1000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "9",
      "ROWNUM_": "9",
      "prod_cat_name": "固定收益",
      "month": "01",
      "annualrate": "6.8",
      "israise": "1",
      "day": "10",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按半年付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "3",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201701101345107460",
      "prod_cat_id": "pc1419313234346",
      "name": "庄园投资私募债第十期2号",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "00",
      "hour": "15",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-5012391",
      "website_p": ""
    }, {
      "ROWSCOUNT": "69",
      "locktime": "5",
      "img": "/images/20170105/201701050909252000.jpg",
      "counteragent": "1",
      "isdebt": "-1",
      "leftdays": "-53",
      "lefttime": "0",
      "creditstatus": "1",
      "finantype": "",
      "orgid": "",
      "orgname": "",
      "paymentmodename": "按半年付息 ",
      "year": "2017",
      "allowinvesttime": "20170105100000",
      "producttype": "",
      "orgname_p": "",
      "productlevel": "A",
      "deadlineVal": "360",
      "status": "4",
      "mintenderedsum": "1000",
      "orgid_p": "",
      "finishstatus": "1-finish",
      "leftamountstatus": "0",
      "ratetype": "0",
      "paymentmode": "9",
      "ROWNUM_": "10",
      "prod_cat_name": "固定收益",
      "month": "01",
      "annualrate": "6.8",
      "israise": "1",
      "day": "05",
      "benefitpertenthousand": "0",
      "deadline": "12",
      "paymentmodevalue": "按日计息,按半年付息,到期还本",
      "product_sort": "0",
      "hasinvestamount": "5000000",
      "sorttemp": "3",
      "is_nice_product": "1",
      "benefitdesc": "",
      "hasinvestamountBL": "100",
      "isbuyback": "0",
      "borrowamount": "5000000",
      "id": "b201701050906595891",
      "prod_cat_id": "pc1419313234346",
      "name": "庄园投资私募债第十期1号",
      "investorable": "200",
      "leftamount": "0",
      "allowtime": "4",
      "minu": "00",
      "hour": "10",
      "leftamountBL": "0",
      "annualratedesc": "",
      "orglogopath_p": "",
      "checkstatus": "1",
      "sort1": "4",
      "deadlineunit": "M",
      "djs": "-5462391",
      "website_p": ""
    }],
    "msg": "OK"
  }
}

var itemData0=[

        {
          "id":11,
          "name":"第一",
          "precent":10,
          "month":12,
          "money":1000,
          "payStyle":"个已宇哥已月我发给已甘苦与姑姑也",
          "last":'10万',
          "bar":60
        },

        {
          "id":12,
          "name":"第2",
          "precent":20,
          "month":12,
          "money":1000,
          "payStyle":"个已宇哥已月我发给已甘苦与姑姑也",
          "last":'10万',
          "bar":60
        },

        {
          "id":13,
          "name":"第3",
          "precent":30,
          "month":12,
          "money":1000,
          "payStyle":"个已宇哥已月我发给已甘苦与姑姑也",
          "last":'10万',
          "bar":60
        },

        { 
          "id":14,
          "name":"第4",
          "precent":40,
          "month":12,
          "money":1000,
          "payStyle":"个已宇哥已月我发给已甘苦与姑姑也",
          "last":'10万',
          "bar":60
        }

      ];

var itemData1=[
  
        {
          "id":21,
          "name":"任务的布局欧冠和杰出的",
          "precent":10,
          "month":12,
          "money":1000,
          "payStyle":"个已宇哥已月我发给已甘苦与姑姑也",
          "last":'10万',
          "bar":60
        },

        {
          "id":22,
          "name":"违法未发货未",
          "precent":20,
          "month":12,
          "money":1000,
          "payStyle":"个已宇哥已月我发给已甘苦与姑姑也",
          "last":'10万',
          "bar":60
        },

        {
          "id":23,
          "name":"而王菲日福个号比如",
          "precent":30,
          "month":12,
          "money":1000,
          "payStyle":"个已宇哥已月我发给已甘苦与姑姑也",
          "last":'10万',
          "bar":60
        },

        { 

          "id":24,
          "name":"无污染凤凰如王鹏飞无关乎于",
          "precent":40,
          "month":12,
          "money":1000,
          "payStyle":"个已宇哥已月我发给已甘苦与姑姑也",
          "last":'10万',
          "bar":60
        }
];


var programSelect=[
    [
      {
        'name':'预计年化收益率',

        'activeIndex':-1,

        'list':[
            {
              'name':'全部',
              'value':{

                'maxannualrate':'',
              'minannualrate':''
              }
              
            },
            {
              'name':'6%以下',
              'value':{


              
              'maxannualrate':'6',
              'minannualrate':''}
            },
            {
              'name':'6%~9%',
              'value':{
                'maxannualrate':'9',
                'minannualrate':'6'
              }
            },
            {
              'name':'9%~12%',
              'value':{
                'maxannualrate':'12',
                'minannualrate':'9'
              }
            },
            {
              'name':'12%以上',
              'value':{
                'maxannualrate':'0',
                'minannualrate':'12'
              }
            }
          ]

      },
      {
          'name':'认购起点',
          'activeIndex':-1,

          'list':[
              {
                'name':'全部',
                'value':{

                    'maxmintenderedsum':'',
                    'minmintenderedsum':''
                }
                

              },
              {
                'name':'1万以下',
                'value':{

                  'maxmintenderedsum':'10000',
                  'minmintenderedsum':'0'

                }
                

              },
              {
                'name':'1万~5万',
               
                'value':{
                  'maxmintenderedsum':'50000',
                  'minmintenderedsum':'10000'
                }
              },
              {
                'name':'5万~10万',
                'value':{
                
                  'maxmintenderedsum':'100000',
                  'minmintenderedsum':'50000'
                }
              },
              {
                'name':'10万~20万',
                'value':{
                
                  'maxmintenderedsum':'200000',
                  'minmintenderedsum':'100000'
                }
              },
              {
                'name':'20万以上',
                'value':{

                  'maxmintenderedsum':'0',
                  'minmintenderedsum':'200000'
                }
              }
          ]

      },
      {
          'name':'发行规模',
          'activeIndex':-1,

          'list':[
              {
                'name':'全部',
                'value':{

                  'maxborrowamount':'',
                  'minborrowamount':''
                }
              },
              {
                'name':'100万以下',
                'value':{
             

                  'maxborrowamount':'1000000',
                  'minborrowamount':''
                }
              },
              {
                'name':'100万~500万',
                'value':{
                
                   'maxborrowamount':'5000000',
                  'minborrowamount':'1000000'
                }
              },
              {
                'name':'500万~1000万',
                'value':{
                
                   'maxborrowamount':'10000000',
                  'minborrowamount':'5000000'
                }
              },
              {
                'name':'1000万以上',
                'value':{
              
                  'maxborrowamount':'0',
                  'minborrowamount':'10000000'
                }
              }
          ]

      },
      {
          'name':'融资期限',
          'activeIndex':-1,

          'list':[
              {
                'name':'全部',
                'value':{
                  'maxdeadline':'',
                  'mindeadline':''
                }
              },
              {
                'name':'6个月以下',
                'value':{
               
                  'maxdeadline':'6',
                  'mindeadline':''
                }
              },
              {
                'name':'6个月~9个月',
                'value':{
        
                  'maxdeadline':'9',
                  'mindeadline':'6'
                }
              },
              {
                'name':'9个月~12个月',
                'value':{
                
                  'maxdeadline':'12',
                  'mindeadline':'9'
                }
              },
              {
                'name':'12个月以上',
                'value':{
                  'maxdeadline':'0',
                  'mindeadline':'12'
                }
              }
          ]

      },
      {
          'name':'剩余可投',
          'activeIndex':-1,

          'list':[
              {
                'name':'全部',
                'value':{
                  'maxleftamount':'',
                  'minleftamount':''
                }
              },
              {
                'name':'30万以下',
                'value':{
                  'maxleftamount':'300000',
                  'minleftamount':'0'
                }
              },
              {
                'name':'30万~200万',
                'value':{
                  'maxleftamount':'2000000',
                  'minleftamount':'300000'
                }
              },
              {
                'name':'200万~500万',
                'value':{
                  'maxleftamount':'5000000',
                  'minleftamount':'2000000'
                }
              },
              {
                'name':'500万以上',
                'value':{
                  'maxleftamount':'0',
                  'minleftamount':'5000000'
                }
              }
          ]

      }
    ],

    [

      {
          'name':'预期年化收益率',
          'activeIndex':-1,

          'list':[
              {
                'name':'全部',
                'value':{
                  'maxannualrate':'',
                  'minannualrate':''
                }

              },
              {
                'name':'6%以下',
                'value':{
                  'maxannualrate':'6',
                  'minannualrate':'0'
                }
              },
              {
                'name':'6%~9%',
                'value':{
                  'maxannualrate':'9',
                  'minannualrate':'6'
                }
              },
              {
                'name':'9%~12%',
                'value':{
                  'maxannualrate':'12',
                  'minannualrate':'9'
                }
              },
              {
                'name':'12%以上',
                'value':{
                  'maxannualrate':'0',
                  'minannualrate':'12'
                }
              }
          ]

      },
      {

        
        'name':'投资期限',
        'activeIndex':-1,

        'list':[
            {
              'name':'全部',
              'value':{

                  'maxdebtlimit':'',
                  'mindebtlimit':''
              }
            },
            {
              'name':'6个月以下',
              
              'value':{

                  'maxdebtlimit':'6',
                  'mindebtlimit':'0'
              }
            },
            {
              'name':'6个月~9个月',
              
              'value':{

                  'maxdebtlimit':'9',
                  'mindebtlimit':'6'
              }
            },
            {
              'name':'9个月~12个月',
              
              'value':{

                  'maxdebtlimit':'12',
                  'mindebtlimit':'9'
              }
            },
            {
              'name':'12个月以上',
             
              'value':{

                  'maxdebtlimit':'0',
                  'mindebtlimit':'12'
              }
            }
        ]

      },
      {
          'name':'转让价格',
          'activeIndex':-1,

          'list':[
              {
                'name':'全部',
                'value':{
                  'maxtransprice':'',
                  'mintransprice':''
                }
              },
              {
                'name':'10万以下',
    
                'value':{
                  'maxtransprice':'100000',
                  'mintransprice':'0'
                }
              },
              {
                'name':'10万~20万',
               
                'value':{
                  'maxtransprice':'200000',
                  'mintransprice':'100000'
                }
              },
              {
                'name':'20万~50万',
                

                'value':{
                  'maxtransprice':'500000',
                  'mintransprice':'200000'
                }
              },
              {
                'name':'50万以上',
                

                'value':{
                  'maxtransprice':'0',
                  'mintransprice':'500000'
                }
              }
          ]

      }


    ]
    
]

export default {

  name: 'tabProgram',
  components:{
    'program-item':programItem
  },

  data () {
    return {

       navBar:{

          'title':'项目',
          
          'showBackButton':false,
          
          'showMenuButton':false
      },

      programTypes:['我要投资','产品转让'],

      activeTabIndex:0,

      isShowFilter:false,  //筛选展示控制

      items: itemData0,  

      itemArr:itemArr.kdjson.items, //获取的后端数据

      showArr:[],//展示的列表数据

      programSelects:programSelect[0],

      filterUrl:'',  //赛选url

      urlModels:[
          {

            maxannualrate:'',
            minannualrate:'',
            maxmintenderedsum:'',
            minmintenderedsum:'',
            maxborrowamount:'',
            minborrowamount:'',
            maxleftamount:'',
            minleftamount:'',
            maxdeadline:'',
            mindeadline:''


          },
          {
            maxannualrate:'',
            minannualrate:'',
            mindebtlimit:'',
            maxdebtlimit:'',
            mintransprice:'',
            maxtransprice:''


          }

      ]
      

    };
  },
  ready(){

      var vm=this;
/*
      vm.$http.post('http://61.178.68.45/koauth2/rest.json').then((res)=>{

        console.log(res)
      })*/

      vm.initItems()
  	
  },

  methods:{

    initItems(){//列表显示处理

      var vm=this

      vm.itemArr.forEach(function(i){
          
          i.precent=i.annualrate  //预期年化收益率
          i.month=i.deadlineVal

         i.money= i.mintenderedsum  //认购起点

          i.last=i.borrowamount //剩余可投

           i.last=i.isbuyback//剩余可投

           



      })

    },

    changeProgramType(){ //选项卡切换

      console.log('changeProgramType',this.activeTabIndex)
      this.programSelects=programSelect[this.activeTabIndex]

      if(this.activeTabIndex==0){


          this.items=itemData0

      }else{

          this.items=itemData1
      }
    },

    showFilter(){

        this.isShowFilter=!this.isShowFilter



    },

    onRefresh(){


    },

    onInfinite(){


    },

    onItemClick(){


    },

    choosed(i,j){//筛选

        var vm=this;

        vm.filterUrl=''



        var val=vm.programSelects[i].list[j].value



        vm.programSelects[i].activeIndex=j;

        console.log(JSON.stringify(vm.programSelects[i]))



        var urlModels= vm.urlModels[vm.activeTabIndex]

        for(var key in val){

          if(val[key]!=''){

              console.log(key,val[key])

              urlModels[key]=val[key]


          }
        }

        for(var key in urlModels){

            if( urlModels[key]!=''){


                vm.filterUrl+='&'+key+'='+urlModels[key]

            }

        }

         console.log(vm.filterUrl)

        //this.filterUrl=



    },

    resetChoose(){//重置筛选

        var urlModels=this.urlModels[this.activeTabIndex];

        this.filterUrl=''

        for(var key  in  urlModels){

            urlModels[key]=''
        }

        //console.log(JSON.stringify(this.programSelects))

        var a= this.programSelects ;

        for(let i =0;i<a.length;i++){

          a[i].activeIndex=-1
        }

        //console.log(JSON.stringify(a))






    },
    sureChoose(){ //确定筛选

       console.log(this.filterUrl)

       this.isShowFilter=!this.isShowFilter


    }


    

  }
};
</script>

