<template lang="pug">
  .page
    h1 Classifier with Elasticsearch
    p
      | Problem: need to classify and label historical and future feedback that comes from the client regarding an event that is triggered by a system and reported by a Data Analyst.
    p
      | Previous process: each client has a separate Google spreadsheet with a feedback for individually reported event. Labeling and classifying an event is not consistent and vary from client to client. Once master sheet with historical feedback is compiled out of individual spreadsheets, manual cleaning and labeling takes place, which is time consuming, prone to errors, and if later on there are changes in labeling introduced, then the whole process has to be start over. Manual review process has disadvantages not only over historical feedback but also over a future feedback – each time a client submits a feedback, a Data Analyst would need to spend additional time to review it.
    p
      | Proposed solution: utilize Elasticsearch reach text search functionality to run different quires with defined set of key phrases to label historical and future feedback that comes from the client.
    p
      | Here is a roadmap for a reference:
      ol
        li Designing and implementing Data model
        li Compiling data set and cleaning it
        li Compiling key phrases dictionary
        li Elasticsearch queries to label events
        li Develop and set up an automated process
        li Create a centralized log to keep a track of script performance
    p
      | It worth mentioning that this project was a part of a bigger Machine Learning project, thus in the beginning data model was created with to define tables, attributes and data types to store reviewed feedback. There were some changes made later on to a data model to accommodate some of the features that were discovered in clients’ feedback.
    p
      | First step was to clean up a historical dataset and address missing values, inconsistent data types, splitting, merging and mapping attributes, as well as parsing. Data was coming from different clients and there were few different templates used for Google spreadsheets, also clients have their own vision of how to classify or fill out fields so most useful information was provided in text notes thus multiple iterations of rule revision took place to clean the data.
    p
      | Second step was to create a dictionary of key phrases that customers utilize to describe a specific event. Some of the events could be described using up to 20 different key phrases. This dictionary was created by analyzing historical data and later on used to label client’s feedback.
    p
      | Third step was to define a set of labels to tag each event. Individual event could have a positive, or negative, or undefined outcome. Events with positive and negative outcomes have distinct types separate from each other. Then for each event there were separate characteristics that could be either present, not present, or undefined.  All of this logic was implemented by using Python script and Elasticsearch queries to parse comments received from the client.
    p
      | These 3 steps helped with labeling and classifying historical feedback. After that, manual review was performed on flagged items that got contradictory labels -  some events were classified as positive and negative at the same time since clients’ notes included both key phrases because it included investigation feedback performed at a different time: initial, further and final investigation. In the end of this process reviewed feedback was saved into SQL database table dedicated to store customer feedback.
    p
      | Steps described above outlined a way to handle a historical feedback but such approach was not suitable to classify a future feedback. It was clear that one person can’t handle a feedback that comes from multiple clients. To balance a workload it was decided to develop a tool that allows each monitoring specialist to review pre-parsed feedback, modify it if needed and submit final version to the database.
    p
      | First step in developing an automated solution was to create a table in the database to store a raw feedback provided by a client in Google spreadsheets. Such table allows to keep a track of any changes made to a feedback by a client. Each event has a status indicating its stage and all changes are detected by Python script by comparing previous values. If there are changes in specific filed, then new row is added along with a timestamp. This script was set to run periodically to scrap Google sheets and save new records to a table on SQL database.
    p
      | Next step was to create AWS Elasticsearch domain to save records from SQL table storing raw feedback once status indicates if an event’s outcome is positive, negative, or  if a decision could not be make at this point as inconclusive. This was also a Python script that is set to running periodically. It has a set of rules to filter and push to Elasticsearch only unreviewed records.
    p
      | Third step was to design and develop a tool that allows a monitoring specialist to view, modify and submit a classified feedback to a SQL table. Ipywidgets Python library was used to create a dashboard to update event’s dataset. Python script was set up to pull records from AWS and output them into Voila dashboard.
    p
      | Since there were different Python scripts running and there were multiple components involved in this project, it was necessary to create a centralized error log to be able to track script performance. It was decided to use standard Python library to log scripts output and a log management platform (Loggly) to be able to quickly review and troubleshoot any issues that were present  while running Python scripts to pull, clean, push and save data.
</template>
