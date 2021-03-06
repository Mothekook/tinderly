// SAMPLE
this.manifest = {
  name: "Tinder Plugin Configurations",
  icon: "icon.png",
  settings: [
    {
      tab: i18n.get("kairos-configs"),
      group: i18n.get("auth"),
      name: "appId",
      type: "text",
      label: i18n.get("kairos-app-id"),
      text: "App ID from your Kairos Developer account"
    },
    {
      tab: i18n.get("kairos-configs"),
      group: i18n.get("auth"),
      name: "appKey",
      type: "text",
      label: i18n.get("kairos-app-key"),
      text: "App key from your Kairos Developer account",
      masked: true
    },
    {
      tab: i18n.get("kairos-configs"),
      group: i18n.get("auth"),
      name: "saveButton",
      type: "button",
      text: "Save Configs"
    },
    {
      tab: i18n.get("kairos-configs"),
      group: i18n.get("auth"),
      name: "kairosDescription",
      type: "description",
      text:
        "Go here to sign up for a free developer account: \
       https://developer.kairos.com"
    }
    // {
    //   tab: i18n.get("information"),
    //   group: i18n.get("logout"),
    //   name: "myCheckbox",
    //   type: "checkbox",
    //   label: i18n.get("enable")
    // },
    // {
    //   tab: i18n.get("information"),
    //   group: i18n.get("logout"),
    //   name: "myButton",
    //   type: "button",
    //   label: i18n.get("disconnect"),
    //   text: i18n.get("logout")
    // }
    // {
    //   tab: "Details",
    //   group: "Sound",
    //   name: "noti_volume",
    //   type: "slider",
    //   label: "Notification volume:",
    //   max: 1,
    //   min: 0,
    //   step: 0.01,
    //   display: true,
    //   displayModifier: function(value) {
    //     return (value * 100).floor() + "%";
    //   }
    // },
    // {
    //   tab: "Details",
    //   group: "Sound",
    //   name: "sound_volume",
    //   type: "slider",
    //   label: "Sound volume:",
    //   max: 100,
    //   min: 0,
    //   step: 1,
    //   display: true,
    //   displayModifier: function(value) {
    //     return value + "%";
    //   }
    // },
    // {
    //   tab: "Details",
    //   group: "Food",
    //   name: "myPopupButton",
    //   type: "popupButton",
    //   label: "Soup 1 should be:",
    //   options: {
    //     groups: ["Hot", "Cold"],
    //     values: [
    //       {
    //         value: "hot",
    //         text: "Very hot",
    //         group: "Hot"
    //       },
    //       {
    //         value: "Medium",
    //         group: 1
    //       },
    //       {
    //         value: "Cold",
    //         group: 2
    //       },
    //       ["Non-existing"]
    //     ]
    //   }
    // },
    // {
    //   tab: "Details",
    //   group: "Food",
    //   name: "myListBox",
    //   type: "listBox",
    //   label: "Soup 2 should be:",
    //   options: [["hot", "Hot and yummy"], ["cold"]]
    // },
    // {
    //   tab: "Details",
    //   group: "Food",
    //   name: "myRadioButtons",
    //   type: "radioButtons",
    //   label: "Soup 3 should be:",
    //   options: [["hot", "Hot and yummy"], ["cold"]]
    // }
  ]
  // "alignment": [
  //     [
  //         "username",
  //         "password"
  //     ],
  //     [
  //         "noti_volume",
  //         "sound_volume"
  //     ]
  // ]
};
