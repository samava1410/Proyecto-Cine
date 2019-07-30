
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author samav
 */
public class Conexion {

    private Connection connect = null;
    private Statement statement = null;
    private ResultSet resultSet = null;

    public Conexion() throws Exception {
        try {

            Class.forName("org.apache.derby.jdbc.ClientDriver").newInstance();
            connect = DriverManager
                    .getConnection("jdbc:derby://localhost:1527/db_cine;create=true");
            PreparedStatement statement = connect
                    .prepareStatement("SELECT * from USERS");

            resultSet = statement.executeQuery();
            while (resultSet.next()) {
                String user = resultSet.getString("name");
                String number = resultSet.getString("number");
                System.out.println("User: " + user);
                System.out.println("ID: " + number);
            }
        } catch (Exception e) {
            throw e;
        } finally {
            close();
        }

    }

    private void close() {
        try {
            if (resultSet != null) {
                resultSet.close();
            }
            if (statement != null) {
                statement.close();
            }
            if (connect != null) {
                connect.close();
            }
        } catch (Exception e) {

        }
    }
    
    public static void main(String[] args) throws Exception {
        Conexion dao = new Conexion();
    }

}
