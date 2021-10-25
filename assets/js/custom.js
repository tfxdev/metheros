$(document).ready(function () {
    // sidebar collapsing
    $('.sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('body').toggleClass('mini-sidebar');
    });
    // mobile menu 
    if ($(window).width() <= 1024) {
        $('.sidebarCollapse').on('click', function () {
            $('body').toggleClass('sidebar-open');
            $('#sidebar').removeClass('active');
            $('#sidebar').css("margin-left", "0");
            $('#sidebar-overlay').addClass('active');
        });
    }
    // mobile menu overlay
    $('#sidebar-overlay').on('click', function () {
        $(this).removeClass('active');
        $('#sidebar').css("margin-left", "-300px");
        $('#sidebar').toggleClass('active');
    });
});

//calendar event initializer

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialDate: '2021-30-07',
        navLinks: true, // can click day/week names to navigate views
        nowIndicator: true,

        weekNumbers: true,
        weekNumberCalculation: 'ISO',

        editable: true,
        selectable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2020-09-01'
            },
            {
                title: 'Long Event',
                start: '2020-09-07',
                end: '2020-09-10'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2020-09-09T16:00:00'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2020-09-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2020-09-11',
                end: '2020-09-13'
            },
            {
                title: 'Meeting',
                start: '2021-07-30T10:30:00',
                end: '2021-07-30T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2020-09-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2020-09-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2020-09-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2020-09-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2020-09-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2020-09-28'
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    // Data Table initialize


    //calendar select weedays
    $('.selectDayByChk').on('click', function () {
        $(this).parent().toggleClass('active');
        // if ($(this).parent().hasClass("active")) {
        //     $(this).removeClass("active");
        // }
        // else {
        //     $(this).parent().addClass("active");
        // }
    });



    //dropdown initialize
    $('#select-month').niceSelect();
    $('#select-contract-drp').niceSelect();
    $('#pending-deal').niceSelect();
    $('#eventDropdown').niceSelect();
    $('#prsnInvolved2').niceSelect();
    $('#pendingDrp').niceSelect();
    $('#prsnInvolved').niceSelect();
    $('#optionDropdown,#optionDropdown2,#optionDropdown3,#optionDropdown4,#optionDropdown5').niceSelect();
    //scrollbar init
    $("#sideScroll").niceScroll({

    });
    //toggle edit input
    $(".show-quantity").hide();
    $(".clickEdit").click(function () {
        $(this).parent().hide();
        $(this).parent().next().toggle();
        //$(".show-quantity").toggle();
    });
    //number input + - 
    (function () {
        "use strict";
        var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
            return function (arg) {
                if (this.length > 1) {
                    this.each(function () {
                        var $this = $(this);

                        if (!$this.data(ident)) {
                            $this.data(ident, func($this, arg));
                        }
                    });

                    return this;
                } else if (this.length === 1) {
                    if (!this.data(ident)) {
                        this.data(ident, func(this, arg));
                    }

                    return this.data(ident);
                }
            };
        });
    })();

    (function () {
        "use strict";
        function Guantity($root) {
            const element = $root;
            const quantity = $root.first("data-quantity");
            const quantity_target = $root.find("[data-quantity-target]");
            const quantity_minus = $root.find("[data-quantity-minus]");
            const quantity_plus = $root.find("[data-quantity-plus]");
            var quantity_ = quantity_target.val();
            $(quantity_minus).click(function () {
                quantity_target.val(--quantity_);
            });
            $(quantity_plus).click(function () {
                quantity_target.val(++quantity_);
            });
        }
        $.fn.Guantity = jQueryPlugin("Guantity", Guantity);
        $("[data-quantity]").Guantity();
    })();
});
