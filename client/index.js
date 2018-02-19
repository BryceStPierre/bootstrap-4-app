import './scss/base.scss';
import 'font-awesome/css/font-awesome.min.css';

import "babel-polyfill";
import $ from 'jquery';
import 'bootstrap';

$('#header').load('html/navbar.html');
$('#footer').load('html/footer.html');

$(() => {

    $('#search').keyup(function () {
        $('#search').val() !== '' 
            ? $('#search-results').addClass('show')
            : $('#search-results').removeClass('show');
    });

    $('#search').focusout(function () {
        $('#search-results').removeClass('show');
    });
    
});
