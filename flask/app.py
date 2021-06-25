from flask import Flask,jsonify
import MySQLdb.cursors
from flask_cors import CORS

app=Flask(__name__)
CORS(app)
app.config['JSON_AS_ASCII']=False
app.config['DEBUG']=True
db = MySQLdb.connect(host='localhost', user='root', passwd='1121', db='test',charset='utf8',
                     cursorclass=MySQLdb.cursors.DictCursor)

@app.route('/',methods=['GET'])
def db_conn():
   cur = db.cursor()
   cur.execute('''select * from test.province''')
   PROVINCES = cur.fetchall()
   return jsonify({
       'provinces':PROVINCES
   })

if __name__ == '__main__':
   app.run()

