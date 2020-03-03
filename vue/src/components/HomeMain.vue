<template>
  <div class="main_contain">
    <div class="main_left">
      <ul>
        <li class="left_menmu" v-for="item in result" :key="item">
          <p class="menmulist_title">{{item.permissionName}}</p>
          
        </li>
      </ul>
    </div>

    <div class="main_right">eqewq</div>
  </div>
</template>
<script>
export default {
  name: "HomeMain",
  data() {
    return {
    result :[
        {
            "id": "5d522a4a03123058e23ae9d6",
            "permissionName": "用户管理",
            "uri": "/userManager",
            "subMenuList": [
                {
                    "id": "5d522bed03123058e23ae9d8",
                    "permissionName": "用户列表",
                    "uri": "/userManager/userList"
                },
                {
                    "id": "5d522c7503123058e23ae9dc",
                    "permissionName": "用户组列表",
                    "uri": "/userManager/userGroupList"
                }
            ]
        },
        {
            "id": "5d522c0403123058e23ae9d9",
            "permissionName": "促销管理",
            "uri": "/promotion",
            "subMenuList": [
                {
                    "id": "5d522c6103123058e23ae9db",
                    "permissionName": "优惠券管理",
                    "uri": "/promotion/coupon"
                },
                {
                    "id": "5d522c8903123058e23ae9dd",
                    "permissionName": "优惠码管理",
                    "uri": "/promotion/promo_code"
                },
                {
                    "id": "5d522c9903123058e23ae9df",
                    "permissionName": "用户组优惠券",
                    "uri": "/promotion/user_group_ticket"
                },
                {
                    "id": "5d522cc203123058e23ae9e1",
                    "permissionName": "用户组折扣设置",
                    "uri": "/promotion/user_discount_batch"
                },
                {
                    "id": "5dced0d1912a81074439ac8a",
                    "permissionName": "优惠券配置",
                    "uri": "/promotion/couponConfig"
                }
            ]
        },
        {
            "id": "5d522c1603123058e23ae9da",
            "permissionName": "商家管理",
            "uri": "/storeManager",
            "subMenuList": [
                {
                    "id": "5d522cc203123058e23ae9e0",
                    "permissionName": "商业管理",
                    "uri": "/storeManager/businessManager"
                }
            ]
        },
        {
            "id": "5d522d0a03123058e23ae9e2",
            "permissionName": "商品管理",
            "uri": "/goodsManager",
            "subMenuList": [
                {
                    "id": "5d522d4703123058e23ae9e4",
                    "permissionName": "商品列表",
                    "uri": "/goodsManager/goodsList"
                },
                {
                    "id": "5d522d6203123058e23ae9e5",
                    "permissionName": "品牌列表",
                    "uri": "/goodsManager/brandList"
                },
                {
                    "id": "5d522d7a03123058e23ae9e7",
                    "permissionName": "分类管理",
                    "uri": "/goodsManager/classifgshop"
                },
                {
                    "id": "5d844784e8c1b83827c144ee",
                    "permissionName": "模板管理",
                    "uri": "/goodsManager/templateList"
                }
            ]
        },
        {
            "id": "5d522d2703123058e23ae9e3",
            "permissionName": "订单管理",
            "uri": "/orderManager",
            "subMenuList": [
                {
                    "id": "5d522d8d03123058e23ae9e8",
                    "permissionName": "订单列表",
                    "uri": "/orderManager/orderList"
                },
                {
                    "id": "5d522da703123058e23ae9e9",
                    "permissionName": "退款列表",
                    "uri": "/orderManager/refundList"
                },
                {
                    "id": "5d522dc103123058e23ae9ea",
                    "permissionName": "汇率管理",
                    "uri": "/orderManager/terraceExchangeRate"
                },
                {
                    "id": "5d7867275e9d8a04227274a9",
                    "permissionName": "评价列表",
                    "uri": "/orderManager/evaluate"
                }
            ]
        },
        {
            "id": "5d522d7603123058e23ae9e6",
            "permissionName": "直播管理",
            "uri": "/liveManager",
            "subMenuList": [
                {
                    "id": "5d522dcc03123058e23ae9eb",
                    "permissionName": "直播列表",
                    "uri": "/liveManager/liveList"
                },
                {
                    "id": "5d522e4903123058e23ae9ec",
                    "permissionName": "短视频管理",
                    "uri": "/liveManager/shortVideoManager"
                }
            ]
        },
        {
            "id": "5d522e6903123058e23ae9ed",
            "permissionName": "店铺管理",
            "uri": "/storeManager",
            "subMenuList": [
                {
                    "id": "5d5230d203123058e23aea0f",
                    "permissionName": "店铺列表",
                    "uri": "/storeManager/storeList"
                },
                {
                    "id": "5d6776635faf1950b7dfabcb",
                    "permissionName": "商家列表",
                    "uri": "/storeManager/shopList"
                }
            ]
        },
        {
            "id": "5d522e6e03123058e23ae9ee",
            "permissionName": "主播管理",
            "uri": "/anchorManager",
            "subMenuList": [
                {
                    "id": "5d522ea003123058e23ae9ef",
                    "permissionName": "主播助理",
                    "uri": "/anchorManager/anchorAssistant"
                },
                {
                    "id": "5d6e42f618dd347dd1045e24",
                    "permissionName": "主播列表",
                    "uri": "/anchorManager/anchorList"
                },
                {
                    "id": "5d6e430f18dd347dd1045e25",
                    "permissionName": "直播申请",
                    "uri": "/anchorManager/liveApplication"
                },
                {
                    "id": "5d6e432818dd347dd1045e26",
                    "permissionName": "主播邀请记录",
                    "uri": "/anchorManager/anchorInvitationRecord"
                },
                {
                    "id": "5d6e434618dd347dd1045e27",
                    "permissionName": "主播招募列表",
                    "uri": "/anchorManager/anchorRecruitList"
                },
                {
                    "id": "5d6e436218dd347dd1045e28",
                    "permissionName": "临时扣货单列表",
                    "uri": "/anchorManager/temporaryShippingList"
                },
                {
                    "id": "5d6e437d18dd347dd1045e29",
                    "permissionName": "推送模板",
                    "uri": "/anchorManager/pushTemplate"
                },
                {
                    "id": "5d6e438f18dd347dd1045e2a",
                    "permissionName": "公告信息",
                    "uri": "/anchorManager/noticeInfomation"
                },
                {
                    "id": "5e1fcfba545df675563484e3",
                    "permissionName": "主播任务管理",
                    "uri": "/anchorManager/anchorTask"
                }
            ]
        },
        {
            "id": "5d522ef503123058e23ae9f0",
            "permissionName": "城市管理",
            "uri": "/putawaymanagement",
            "subMenuList": [
                {
                    "id": "5d522f0c03123058e23ae9f1",
                    "permissionName": "城市列表",
                    "uri": "/putawaymanagement/Citylist"
                }
            ]
        },
        {
            "id": "5d5bec6bd7c75626ec68e05a",
            "permissionName": "活动管理",
            "uri": "/activitymanagement",
            "subMenuList": [
                {
                    "id": "5dc1e1de7cb33d7e0a103cc3",
                    "permissionName": "活动列表",
                    "uri": "/activitymanagement/activitiesList"
                },
                {
                    "id": "5e007ee0bbfacc0fd21e0808",
                    "permissionName": "活动数据",
                    "uri": "/activitymanagement/activeData"
                }
            ]
        },
        {
            "id": "5d6e1958e6417b4ed26b2151",
            "permissionName": "运营位",
            "uri": "/operationManager",
            "subMenuList": [
                {
                    "id": "5d6e19d2e6417b4ed26b2152",
                    "permissionName": "专题运营位",
                    "uri": "/operationManager/topicOperation"
                },
                {
                    "id": "5d6e1a08e6417b4ed26b2153",
                    "permissionName": "店铺运营位",
                    "uri": "/operationManager/storeOperation"
                },
                {
                    "id": "5d6e1a19e6417b4ed26b2154",
                    "permissionName": "商品运营位",
                    "uri": "/operationManager/goodsOperation"
                },
                {
                    "id": "5d6e1a2ae6417b4ed26b2155",
                    "permissionName": "展位运营位",
                    "uri": "/operationManager/standsOperations"
                },
                {
                    "id": "5ddd5741d7bb4c1268860b5a",
                    "permissionName": "海报运营位",
                    "uri": "/operationManager/posterOperation"
                },
                {
                    "id": "5e4128afcede0d798db34c99",
                    "permissionName": "弹窗运营位",
                    "uri": "/operationManager/dialogOperation"
                }
            ]
        },
        {
            "id": "5d9085ef982ad94ee7404c17",
            "permissionName": "版本管理",
            "uri": "/versionManager",
            "subMenuList": [
                {
                    "id": "5d908661982ad94ee7404c18",
                    "permissionName": "版本管理列表",
                    "uri": "/versionManager/versionList"
                }
            ]
        },
        {
            "id": "5db1afd3138e4611c53dbc40",
            "permissionName": "权限管理",
            "uri": "/limitManager",
            "subMenuList": [
                {
                    "id": "5db1aff563395c0102b533bb",
                    "permissionName": "菜单权限列表",
                    "uri": "/limitManager/limitList"
                },
                {
                    "id": "5db1b00863395c0102b533bc",
                    "permissionName": "角色列表",
                    "uri": "/limitManager/roleList"
                },
                {
                    "id": "5db1b01b63395c0102b533bd",
                    "permissionName": "管理员列表",
                    "uri": "/limitManager/adminList"
                }
            ]
        },
        {
            "id": "5dc974cacc5eac6c6548cee0",
            "permissionName": "系统管理",
            "uri": "/reportManager",
            "subMenuList": [
                {
                    "id": "5dc974e9cc5eac6c6548cee1",
                    "permissionName": "数据子系统",
                    "uri": "/reportManager/reportSystem"
                }
            ]
        }
    ],
}

  }
};
</script>

<style>
.main_contain {
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.main_left {
  width: 15%;
  height: 100%;
  overflow: auto;
  background-color: #f7f8fa;
}
.left_menmu {
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0px 40px 0px 20px;
}
.menmulist_title{
    font-size: 14px;
}
.main_right {
  width: 80%;
  background-color: #ffffff;
  height: 100%;
  overflow: auto;
}
</style>