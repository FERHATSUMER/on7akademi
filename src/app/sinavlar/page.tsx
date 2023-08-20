export default function Sinavlar() {
    return (
        <div className="container">
            <h1>Sınav Sayfası</h1>
            <table className="exam-table">
                <tbody>
                    <tr>
                        <td><strong>Sınav Adı:</strong></td>
                        <td>Matematik Sınavı</td>
                    </tr>
                    <tr>
                        <td><strong>Sınav Tarihi:</strong></td>
                        <td>15 Eylül 2023</td>
                    </tr>
                    <tr>
                        <td><strong>Dersin Öğretmen Adı:</strong></td>
                        <td>Ahmet Yılmaz</td>
                    </tr>
                </tbody>
            </table>
            <button className="button">Sınava Katıl</button>
            <button className="button button-secondary">Ekle</button>
        </div>
    );
};  
  
  