export function get_data() {
  return {
    "fields":
      [
        {
          "key": "versionEntry",
          "label": "Version",
          "filter": false
        },
        {
          "key": "dateCreated",
          "label": "Creation date",
          "filter": true
        },
        {
          "key": "statusEntry",
          "label": "Status",
          "filter": true
        },
        {
          "key": "dateChanged",
          "label": "Date changed",
          "filter": true
        }
      ],
    "items":
      [
        {
          "id": 1,
          "versionEntry": "v 1.02",
          "dateCreated": "01 january 2020 18:20",
          "statusEntry": "Not finished",
          "dateChanged": "01 january 2020 18:20"
        },
        {
          "id": 2,
          "versionEntry": "v 1.01",
          "dateCreated": "01 january 2020 18:20",
          "statusEntry": "Checking",
          "dateChanged": "01 january 2020 18:20",
          "mad": "maaad"
        },
        {
          "id": 3,
          "versionEntry": "v 1.00",
          "dateCreated": "01 january 2020 18:20",
          "dateChanged": "01 january 2020 18:20"
        }
      ]
  }

}
