<%@page import="java.util.Date"%>
<%@page contentType="application/xml" pageEncoding="UTF-8"%>
<% Date maDate = new Date(); %>

<date>
    <heure> <% out.println(maDate.getHours()); %> </heure>
    <minute> <% out.println(maDate.getMinutes()); %> </minute>
    <seconde> <% out.println(maDate.getSeconds()); %> </seconde>
</date>
