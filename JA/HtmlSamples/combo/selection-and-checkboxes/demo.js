$(function () {
var colors = [
            { Name: "$$(IgniteUI)" },
            { Name: "$$(ASP)" },
            { Name: "$$(WinForms)" },
            { Name: "$$(WPF)" },
            { Name: "$$(Android)" },
            { Name: "$$(iOS)" },
            { Name: "$$(SharePlus)" },
            { Name: "$$(ReportPlus)" },
            { Name: "$$(Indigo)" }
        ];

        $(function () {

            $("#singleSelectCombo").igCombo({
                width: "280px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                dropDownOnFocus: true
            });

            $("#multiSelectCombo").igCombo({
                width: "280px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: {
                    enabled: true
                }
            });

            $("#checkboxSelectCombo").igCombo({
                width: "280px",
                dataSource: colors,
                textKey: "Name",
                valueKey: "Name",
                multiSelection: {
                    enabled: true,
                    showCheckboxes: true
                }
            });

        });
});