function encodeUri (input) {
    return encodeURIComponent(input)
}
const htmlToBBCode = function(html) {
    // html = html.replace(/\t/g, '')
    // html = html.replace(/\n/g, '')
    html = html.replace(/<pre(.*?)>(.*?)<\/pre>/gmi, "[code]$2[/code]");

    // html = html.replace(/<h[1-7](.*?)>(.*?)<\/h[1-7]>/, "\n[h]$2[/h]\n");

    //paragraph handling:
    //- if a paragraph opens on the same line as another one closes, insert an extra blank line
    //- opening tag becomes two line breaks
    //- closing tags are just removed
    // html += html.replace(/<\/p><p/<\/p>\n<p/gi;
    // html += html.replace(/<p[^>]*>/\n\n/gi;
    // html += html.replace(/<\/p>//gi;

    html = html.replace(/\<a href\="\?tag\=(.*?)"\>(.*?)/gi, ' ');
    html = html.replace(/&nbsp;/g, ' ')
    html = html.replace(/@\[(.*?)\]\(userId\:([0-9]+)\)/,'[USER=$2]$1[/USER]')
    html = html.replace(/<br(.*?)>/gi, "\n");
    html = html.replace(/<textarea(.*?)>(.*?)<\/textarea>/gmi, "\[code]$2\[\/code]");
    html = html.replace(/<b>/gi, "[b]");
    html = html.replace(/<u>/gi, "[u]");
    html = html.replace(/<\/b>/gi, "[/b]");
    html = html.replace(/<\/u>/gi, "[/u]");
    html = html.replace(/<em>/gi, "[b]");
    html = html.replace(/<i>/gi, "[i]");
    html = html.replace(/<\/i>/gi, "[/i]\n");
    html = html.replace(/<\/em>/gi, "[/b]");
    html = html.replace(/<strong>/gi, "[b]");
    html = html.replace(/<\/strong>/gi, "[/b]");
    html = html.replace(/<cite>/gi, "[i]");
    html = html.replace(/<\/cite>/gi, "[/i]");
    html = html.replace(/<font color="(.*?)">(.*?)<\/font>/gmi, "[color=$1]$2[/color]");
    html = html.replace(/<font color=(.*?)>(.*?)<\/font>/gmi, "[color=$1]$2[/color]");
    html = html.replace(/<link(.*?)>/gi, "");
    html = html.replace(/<li(.*?)>(.*?)<\/li>/gi, "[*]$2");
    html = html.replace(/<ul(.*?)>/gi, "[list]");
    html = html.replace(/<\/ul>/gi, "[/list]");
    html = html.replace(/<ol(.*?)>/gi, '[list]')
    html = html.replace(/<\/ol>/gi, '[/list]')
    html = html.replace(/&gt;/gi, '')
    html = html.replace(/<div>/gi, "\n");
    html = html.replace(/<\/div>/gi, "\n");
    html = html.replace(/<td(.*?)>/gi, " ");
    html = html.replace(/<tr(.*?)>/gi, "\n");

    html = html.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, "[img]$2[/img]");
    html = html.replace(/<a(.*?)href="(.*?)"(.*?)>(.*?)<\/a>/gi, function (match, $1, url, $3, text) {
        return `[url=${encodeUri(url)}]${text}[/url]`
    });

    html = html.replace(/<head>(.*?)<\/head>/gmi, "");
    html = html.replace(/<object>(.*?)<\/object>/gmi, "");
    html = html.replace(/<script(.*?)>(.*?)<\/script>/gmi, "");
    html = html.replace(/<style(.*?)>(.*?)<\/style>/gmi, "");
    html = html.replace(/<title>(.*?)<\/title>/gmi, "");
    html = html.replace(/<!--(.*?)-->/gmi, "\n");

    html = html.replace(/\/\//gi, "/");
    html = html.replace(/http:\//gi, "http://");
    html = html.replace(/https:\//gi, "https://");

    html = html.replace(/(\S)\n/gi, "$1 ");
    html = html.replace(/<\/p>/gi, '\n');
    html = html.replace(/<\/h[1-7]>/gi, '\n')
    html = html.replace(/<(?:[^>'"]*|(['"]).*?\1)*>/gmi, "");
    html = html.replace(/\r\r/gi, "");
    html = html.replace(/\[img]\//gi, "[img]");
    html = html.replace(/\[\/img]/gi, "[/img]\n");
    html = html.replace(/\[url=\//gi, "[url=");

    html = html.replace(/\[\/i]/gi, "[/i]\n");

    return html;
}
const html = '<h2><strong>Khi điều khiển xe ô tô, chị em phụ nữ thường mắc phải khá nhiều lỗi nhỏ nhặt, nhưng vô tình lại dễ gặp phải những tai nạn không đáng có. Vậy đâu là những thói quen sai lầm phổ biến của nữ giới khi lái ô tô?</strong></h2><p><img src="https://img1.oto.com.vn/2023/03/07/AJxaR32b/phu-nu-lai-xe-0123-0174.jpg" alt="Tổng hợp những lỗi phổ biến nhất của phụ nữ khi lái xe ô tô"></p><p><i>Tổng hợp những lỗi phổ biến nhất của phụ nữ khi lái xe ô tô.</i></p><p>&nbsp;</p><p>Những vụ tai nạn giao thông do nữ giới gây ra không phải là hiếm gặp, mà nguyên nhân nhiều khi lại xuất phát từ những thói quen hết sức “lãng xẹt”. Điển hình như:</p><h2><strong>Quên hoặc chỉnh vị trí ghế ngồi không phù hợp</strong></h2><p>Khi bước vào <strong>ô tô</strong>, thao tác chỉnh gương, ghế và hạ phanh tay,…đều là điều cơ bản nhưng rất quan trọng. Bởi ghế ngồi không được điều chỉnh vừa tầm với người lái sẽ gây tình trạng khó quan sát, tư thế ngồi không hợp lý cũng khiến lái xe khó quan sát, dễ xảy ra tai nạn.</p><p>&nbsp;</p><p><img src="https://img1.oto.com.vn/2023/03/07/AJxaR32b/quen-chinh-ghe--2242.jpg" alt="ghế ngồi không được điều chỉnh vừa tầm với người lái sẽ gây tình trạng khó quan sát"></p><p><i>Ghế ngồi không được điều chỉnh vừa tầm với người lái sẽ gây tình trạng khó quan sát.</i></p><p>&nbsp;</p><p>Và hầu như các chị em phụ nữ, nhất là những người mới lấy bằng thường mắc lỗi này. Bởi chưa có thói quen và quá tập trung vào việc điều khiển xe, chân phanh, chân ga,… Nên vô tình quên đi việc ngồi như thế nào là hợp lý, điều chỉnh vô-lăng, kính chiếu hậu sao cho đúng vị trí.</p><h2><strong>Quên điều chỉnh gương&nbsp;</strong></h2><p>Chỉnh gương chiếu hậu phù hợp sẽ giúp mở rộng tầm nhìn, phát huy được tối đa tác dụng của gương trung tâm. Song, một số lái mới kể cả phụ nữ hay nam giới thì cũng dễ quên điều này vì quá tập trung vào vô lăng, cần số hay hệ thống giải trí,…</p><p>&nbsp;</p><p>Việc quên chỉnh gương hoặc chỉnh không phù hợp đều khiến tầm nhìn bị hạn chế, làm tài xế khó có cái nhìn bao quát xung quanh. Điều này dễ tạo điểm mù lớn, gây nguy hiểm khi lưu thông trên đường.&nbsp;</p><h2><strong>Khoảng cách với vô lăng không hợp lý</strong></h2><p>Ngồi quá gần hoặc quá xa vô lăng cũng là một trong những thói quen rất nguy hiểm của&nbsp;phụ nữ khi lái xe. Nếu ngồi với khoảng cách quá gần vô lăng sẽ khó thao tác hơn, có nguy cơ bị thương nặng nếu không may xảy ra va chạm. Trong khi ngồi quá xa vô vô lăng sẽ gây cảm giác mỏi và bị vướn vì tầm quan sát không tốt.</p><p>&nbsp;</p><p><img src="https://img1.oto.com.vn/2023/03/07/AJxaR32b/phu-nu-lai-xe-0214-ad4f.jpg" alt="Ngồi quá gần hoặc quá xa vô lăng cũng là một trong những thói quen rất nguy hiểm của &nbsp;phụ nữ khi lái xe. "></p><p><i>Ngồi quá gần hoặc quá xa vô lăng cũng là một trong những thói quen rất nguy hiểm của phụ nữ khi lái xe.&nbsp;</i></p><p>&nbsp;</p><p>Theo đó, khoảng cách từ ngực tới tâm vô lăng nên được duy trì tối thiểu ở mức khoảng 30,5 cm.</p><h2><strong>Không giữ khoảng cách với xe phía trước</strong></h2><p>Rất nhiều chị em thường có thói quen đi sát với xe phía trước. Điều này không chỉ gây khó chịu cho xe khác mà vô tình còn gây mất an toàn khi tham gia giao thông, nhất là trong những trường hợp cần phanh gấp.</p><p>Theo đó, cần lưu ý duy trì khoảng cách phù hợp với xe phía trước và giữ tốc độ phù hợp.</p><h2><strong>Chuyển số D – R khi xe chưa dừng hẳn</strong></h2><p>Việc chuyển đổi giữa các chế độ số lùi và số tiến thông thường sẽ được sử dụng khi đỗ xe trong những khu vực có không gian nhỏ. Song, vì tâm lý hoặc quên mà nhiều phụ nữ hay có thói quen rà phanh và khi xe chưa dừng hẳn đã chuyển cần số từ D về R hay ngược lại.&nbsp;</p><p>&nbsp;</p><p><img src="https://img1.oto.com.vn/2023/03/07/AJxaR32b/phu-nu-lai-xe-21-ce1c.jpg" alt="iệc chuyển đổi số lùi – tiến khi xe chưa dừng hẳn có thể là nguyên nhân dẫn đến bị hỏng hộp số"></p><p><i>Việc chuyển đổi số lùi – tiến khi xe chưa dừng hẳn có thể là nguyên nhân dẫn đến bị hỏng hộp số.</i></p><p>&nbsp;</p><p>Ngoài ra, một số trường hợp (kể cả nam hay nữ ) vì bất cẩn bị chuyển số hoặc gạt nhầm chuyển cần số về số P hay số R. Song, theo khuyến cáo từ nhiều người có <strong>kinh nghiệm</strong>, việc chuyển đổi số lùi – tiến khi xe chưa dừng hẳn có thể là nguyên nhân dẫn đến bị hỏng hộp số nếu xảy ra thường xuyên và người dùng sẽ phải tốn khá nhiều chi phí cho việc sửa chữa xe.</p><h2><strong>Rà phanh khi xe xuống dốc</strong></h2><p>Khá nhiều trường hợp chị em phụ nữ và cả các tài mới có thói quen rà phanh khi xuống dốc để tránh xe bị trôi quá nhanh. Tuy nhiên, việc làm này sinh ra nhiệt ở các má phanh và rotor, gây tình trạng mài mòn và tăng nguy cơ bị quá nóng hay bị méo.</p><p>&nbsp;</p><p>Lời khuyên lúc này là nên chuyển sang số thấp hơn. Việc giảm sức ép một cách tự nhiên trong hệ thống truyền lực sẽ giúp cho xe ô tô duy trì tốc độ an toàn.&nbsp;</p><h2><strong>Dùng hai chân để thao tác ga, phanh</strong></h2><p>Với những người chuyển từ xe số sàn lên xe số tự động rất hay gặp phải sai lầm là dùng chân trái để đạp phanh và chân phải đạp ga.</p><p>&nbsp;</p><p><img src="https://img1.oto.com.vn/2023/03/07/AJxaR32b/loi-co-ban-cua-phu-nu-khi-lai-xe-7b62.jpg" alt="với xe số tự động, tài xế chỉ cần sử dụng duy nhất chân phải để thao tác giữa ga và phanh. "></p><p><i>Với xe số tự động, tài xế chỉ cần sử dụng duy nhất chân phải để thao tác giữa ga và phanh.&nbsp;</i></p><p>&nbsp;</p><p>Theo khuyến cáo, với xe số tự động, tài xế chỉ cần sử dụng duy nhất chân phải để thao tác giữa ga và phanh. Và việc dùng cả 2 chân để điều khiển rất dễ gây ra tai nạn. Nhất là trong những tình huống bất ngờ, theo thói quen phản xạ thì lái xe thường sẽ đạp cả hai chân nhưng nếu đạp mạnh chân ga thì tác dụng của phanh sẽ giảm rất nhiều, lúc này xe không thể dừng như mong muốn.</p><h2><strong>Không dùng phanh tay</strong></h2><p>Nhiều người nghĩ rằng khi đỗ xe trên địa hình bằng phẳng thì không cần sử dụng phanh tay. Song, việc không sử dụng phanh tay sẽ khiến toàn bộ trọng lượng của xe dồn vào một miếng kim loại nhỏ nằm trong hộp số, hay còn được gọi là chốt hãm.</p><p>&nbsp;</p><p>Trên thực tế, chốt hãm chỉ nhỏ bằng một ngón tay, do đó mà nó có thể bị mòn hoặc thậm chí có khả năng bị gãy khi phải chịu toàn bộ sức nặng của xe. Trong khi đó, sử dụng phanh tay sẽ làm cân bằng tải trọng, giúp cho các bộ phận truyền động trong hộp số của xe có tuổi thọ lâu hơn.</p><h2><strong>Mở cửa xe mà không quan sát</strong></h2><p>Trên thực tế đã có rất nhiều trường hợp tai nạn thương tâm do va chạm khi mở cửa xe. Câu chuyện mở cửa xe không quan sát, bung cửa bất ngờ gây tai nạn cho người đi đường không chỉ gặp ở phụ nữ mà khá nhiều nam giới cũng mắc phải.&nbsp;</p><p>&nbsp;</p><figure class="image"><img src="https://images-cdn.carpla.vn/forum/2023/03/1571_14.2.jpg"></figure><p><i>Mở cửa xe chậm bao giờ cũng giúp phương tiện khác đủ thời gian nhận thấy phương tiện từ xa.&nbsp;</i></p><p>&nbsp;</p><p>Theo đó, dù là nam hay nữ, tài mới hay tài già thì khi cầm lái cũng nên thực hiện nguyên tắc 3 giây giống cách giữ khoảng cách trên cao tốc. Nói một cách dễ hiểu tức là không bao giờ mở cửa xe quá nhanh, chậm bao giờ cũng giúp phương tiện khác đủ thời gian nhận thấy phương tiện từ xa. Cùng với đó, nếu ở vị trí hành khách thì cũng nên lưu ý điều này.</p><p>&nbsp;</p><p>Ngoài những thói quen, sai lầm kể trên thì một số hành động khác như đặt sai vị trí túi xách, đi giày có gót quá cao, mặc đồ bó sát không thoải mái hay mất tập trung khi lái xe,…cũng là những điều mà các chị em phụ nữ cần loại bỏ khi lái xe ô tô để đảm bảo an toàn.</p><p>&nbsp;</p><p><a class="tag" data-mention="#kinhnghiemlaixe" data-user-id="#kinhnghiemlaixe0.9767284859372727" href="?tag=kinhnghiemlaixe">#kinhnghiemlaixe</a>&nbsp;</p><p>Nguồn: https://oto.com.vn/kinh-nghiem-lai-xe/nhung-loi-pho-bien-cua-phu-nu-khi-articleid-fyt0y6f</p>'
const html1 = `<img src="https://img1.oto.com.vn/2023/03/07/AJxaR32b/phu-nu-lai-xe-0214-ad4f.jpg" alt="Ngồi quá gần hoặc quá xa vô lăng cũng là một trong những thói quen rất nguy hiểm của phụ nữ khi lái xe." >`
const html2 = `<h2>Độ trần sao ô tô không chỉ đem đến cảm giác thư giãn cho người dùng mà còn giúp nâng hạng xế sang.</h2><h3>Trần sao ô tô là gì?</h3><p>Nguồn gốc của độ trần sao ô tô được bắt nguồn từ mẫu se siêu sang Roll Royce – đây có lẽ là dòng xe duy nhất được hãng trang bị sẵn trần sao ô tô với một màu trắng duy nhất. Song, để bắt kịp xu thế mà nhiều chủ nhân của những dòng xế sang như Audi, BMW, Mercedes... &nbsp;cũng muốn nâng cấp chiếc xe của mình thêm bắt mắt, lấp lánh hơn.</p><p>&nbsp;</p><figure class="image"><img src="https://images-cdn.carpla.vn/forum/2023/03/1750_22.6.webp"></figure><p><i>Độ trần sao ô tô là xu hướng làm đẹp xe được ưa chuộng những ngày gần đây</i></p><p>&nbsp;</p><p>Trần sao ô tô hay còn gọi tên khác là độ trần sao rơi là một kiểu trang trí nhằm giúp nâng cấp và tô điểm để chiếc xe thêm phần nổi bật hơn. Trần xe sau khi được lắp đặt sẽ có dải màu sắc lấp lánh đem đến không gian mới mẻ, thư giãn cho người ngồi bên trong, đồng thời giúp nâng hạng đẳng cấp cho chiếc xe.</p><h3>Có nên độ đèn trần sao xe ô tô?</h3><p>Xe ô tô qua nhiều năm sử dụng sẽ dễ gây nhàm chán. Độ trần đèn sao là một cách để làm mới nội thất xe thêm phần bắt mắt cũng như “thắp sáng” không gian bên trong, đem đến một bầu trời đầy sắc màu, không gian trải nghiệm huyền ảo và cao cấp.</p><p>&nbsp;</p><p><img src="https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-den-sao-o-to-dem-den-bau-troi-day-sac-mau-khong-gian-trai-nghiem-huyen-ao-va-cao-cap.jpg.webp" alt="Độ trần đèn sao ô tô đem đến bầu trời đầy sắc màu, không gian trải nghiệm huyền ảo và cao cấp" srcset="https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-den-sao-o-to-dem-den-bau-troi-day-sac-mau-khong-gian-trai-nghiem-huyen-ao-va-cao-cap.jpg.webp 850w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-den-sao-o-to-dem-den-bau-troi-day-sac-mau-khong-gian-trai-nghiem-huyen-ao-va-cao-cap-300x168.jpg.webp 300w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-den-sao-o-to-dem-den-bau-troi-day-sac-mau-khong-gian-trai-nghiem-huyen-ao-va-cao-cap-768x431.jpg.webp 768w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-den-sao-o-to-dem-den-bau-troi-day-sac-mau-khong-gian-trai-nghiem-huyen-ao-va-cao-cap-98x55.jpg.webp 98w" sizes="100vw" width="850"></p><p><i>Độ trần đèn sao ô tô đem đến bầu trời đầy sắc màu, không gian trải nghiệm huyền ảo và cao cấp</i></p><p>&nbsp;</p><p>Ngoài ra độ đèn trần xe ô tô còn là giải pháp giúp cải thiện, nâng cấp những chiếc xe cũ kỹ, bám nhiều bụi bẩn theo thời gian. Đồng thời việc thiết kế đèn trần còn giúp tạo điểm nhấn khác biệt so với mẫu xe nguyên bản.</p><p>&nbsp;</p><p>Những lý do khiến cho độ đèn trần sao xe ô tô ngày càng trở nên xu hướng</p><ul><li>Nâng cấp vẻ đẹp cho xế sang, giúp không gian bên trong xe trở nên lung linh hơn</li><li>Đem đến không gian thư giãn, thoải mái cho những người ngồi trong xe</li><li>Được lựa chọn từ chất liệu tốt, giúp kéo dài tuổi thọ cho trần xe</li><li>Gia tăng khả năng cách âm, cản nhiệt</li></ul><h3>Cấu tạo và nguyên lý hoạt động của trần sao xe ô tô</h3><h4><strong>Cấu tạo trần sao xe ô tô</strong></h4><p>Cấu tạo của trần sao xe ô tô khá đơn giản bao gồm dây sợi quang (hoặc đèn LED) và thiết bị modum điều khiển hệ thống đèn trần sao ô tô.</p><p>&nbsp;</p><p><img src="https://danchoioto.vn/wp-content/uploads/2023/03/Cau-tao-cua-tran-sao-xe-o-gom-day-soi-quang-hoac-den-LED-va-thiet-bi-modum-dieu-khien.jpg.webp" alt="Cấu tạo của trần sao xe ô gồm dây sợi quang (hoặc đèn LED) và thiết bị modum điều khiển" srcset="https://danchoioto.vn/wp-content/uploads/2023/03/Cau-tao-cua-tran-sao-xe-o-gom-day-soi-quang-hoac-den-LED-va-thiet-bi-modum-dieu-khien.jpg.webp 850w, https://danchoioto.vn/wp-content/uploads/2023/03/Cau-tao-cua-tran-sao-xe-o-gom-day-soi-quang-hoac-den-LED-va-thiet-bi-modum-dieu-khien-300x138.jpg.webp 300w, https://danchoioto.vn/wp-content/uploads/2023/03/Cau-tao-cua-tran-sao-xe-o-gom-day-soi-quang-hoac-den-LED-va-thiet-bi-modum-dieu-khien-768x353.jpg.webp 768w, https://danchoioto.vn/wp-content/uploads/2023/03/Cau-tao-cua-tran-sao-xe-o-gom-day-soi-quang-hoac-den-LED-va-thiet-bi-modum-dieu-khien-120x55.jpg.webp 120w" sizes="100vw" width="850"></p><p><i>Cấu tạo của trần sao xe ô gồm dây sợi quang (hoặc đèn LED) và thiết bị modum điều khiển</i></p><h4><strong>Nguyên lý hoạt động trần sao xe ô tô</strong></h4><p>Tác dụng của dây sợi quang là dẫn nguồn ánh sáng đến các vị trí muốn lắp đặt. Sau đó sử dụng modum để người dùng lựa chọn các hiệu ứng ánh sáng yêu thích. Thiết bị này có thể tự điều chỉnh thông qua kết nối Bluetooth hoặc điều khiển qua điện thoại smartphone.</p><p>Tùy từng dòng xe và mật độ sao để gắn trên trần xe thường dao động từ 400 – 700 điểm. Kích thước tại mỗi điểm khoảng thường từ 0.5 – 0.75 mm.</p><h3>Các kiểu độ trần sao cho xe ô tô</h3><p>Hiện nay tại các showroom đang bán và lắp đặt cho khách có nhiều kiểu độ trần sao xe ô tô khác nhau. Theo đó, một số loại trần sao phổ biến nhất là:</p><h4><strong>Độ trần sao thông thường</strong></h4><p>Là kiểu được thiết kế từ các dải ánh sáng dạng LED được rải ngẫu nhiên trên trần và sẽ đổi màu theo nhạc. Loại độ trần sao kiểu này thường được áp dụng cho những hạng xe phổ thông như Mitsubishi Pajero Sport, Kia Sorento, Hyundai SantaFe, Mazda CX-8…</p><p>&nbsp;</p><p><img src="https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-kieu-thong-thuong-dang-LED-duoc-rai-ngau-nhien-tren-tran-va-se-doi-mau-theo-nhac.jpg.webp" alt="Độ trần sao kiểu thông thường dạng LED được rải ngẫu nhiên trên trần và sẽ đổi màu theo nhạc" srcset="https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-kieu-thong-thuong-dang-LED-duoc-rai-ngau-nhien-tren-tran-va-se-doi-mau-theo-nhac.jpg.webp 850w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-kieu-thong-thuong-dang-LED-duoc-rai-ngau-nhien-tren-tran-va-se-doi-mau-theo-nhac-300x169.jpg.webp 300w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-kieu-thong-thuong-dang-LED-duoc-rai-ngau-nhien-tren-tran-va-se-doi-mau-theo-nhac-768x434.jpg.webp 768w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-kieu-thong-thuong-dang-LED-duoc-rai-ngau-nhien-tren-tran-va-se-doi-mau-theo-nhac-97x55.jpg.webp 97w" sizes="100vw" width="850"></p><p><i>Độ trần sao kiểu thông thường dạng LED được rải ngẫu nhiên trên trần và sẽ đổi màu theo nhạc</i></p><h4><strong>Trần sao băng rơi</strong></h4><p>Gần giống với cách lắp đặt của trần sao thông thường nhưng được tích hợp thêm hiệu ứng các hạt sao rơi. Các ngôi sao băng sẽ được thiết kế trước trên modum và được điều chỉnh giống hệt ngôi sao băng trên bầu trời. Giá lắp đặt trần sao băng thường khá cao so với độ trần sao thông thường.</p><p>&nbsp;</p><p><img src="https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-bang-roi-duoc-lap-dat-gan-giong-kieu-thong-thuong-va-tich-hop-them-hieu-ung-cac-hat-sao-roi.jpg.webp" alt="Độ trần sao băng rơi được lắp đặt gần giống kiểu thông thường và tích hợp thêm hiệu ứng các hạt sao rơi" srcset="https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-bang-roi-duoc-lap-dat-gan-giong-kieu-thong-thuong-va-tich-hop-them-hieu-ung-cac-hat-sao-roi.jpg.webp 850w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-bang-roi-duoc-lap-dat-gan-giong-kieu-thong-thuong-va-tich-hop-them-hieu-ung-cac-hat-sao-roi-300x163.jpg.webp 300w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-bang-roi-duoc-lap-dat-gan-giong-kieu-thong-thuong-va-tich-hop-them-hieu-ung-cac-hat-sao-roi-768x417.jpg.webp 768w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-sao-bang-roi-duoc-lap-dat-gan-giong-kieu-thong-thuong-va-tich-hop-them-hieu-ung-cac-hat-sao-roi-101x55.jpg.webp 101w" sizes="100vw" width="850"></p><p><i>Độ trần sao băng rơi được lắp đặt gần giống kiểu thông thường và tích hợp thêm hiệu ứng các hạt sao rơi</i></p><h4><strong>Độ trần sao nhiều màu</strong></h4><p>Kiểu độ trần nổi bật với dải màu đa sắc màu như xanh, tím, vàng, đỏ đan xem với nhau. So với các kiểu trên, thiết kế này trông bắt mắt hơn mang đến cho người ngồi cảm giác như đang ở ngoài vũ trụ bao la.</p><p>&nbsp;</p><p><img src="https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-nhieu-mau-noi-bat-voi-dai-mau-da-sac-mau-nhu-xanh-tim-vang-do-dan-xem-voi-nhau.jpg.webp" alt="Độ trần nhiều màu nổi bật với dải màu đa sắc màu như xanh, tím, vàng, đỏ đan xem với nhau" srcset="https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-nhieu-mau-noi-bat-voi-dai-mau-da-sac-mau-nhu-xanh-tim-vang-do-dan-xem-voi-nhau.jpg.webp 850w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-nhieu-mau-noi-bat-voi-dai-mau-da-sac-mau-nhu-xanh-tim-vang-do-dan-xem-voi-nhau-300x169.jpg.webp 300w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-nhieu-mau-noi-bat-voi-dai-mau-da-sac-mau-nhu-xanh-tim-vang-do-dan-xem-voi-nhau-768x434.jpg.webp 768w, https://danchoioto.vn/wp-content/uploads/2023/03/Do-tran-nhieu-mau-noi-bat-voi-dai-mau-da-sac-mau-nhu-xanh-tim-vang-do-dan-xem-voi-nhau-97x55.jpg.webp 97w" sizes="100vw" width="850"></p><p><i>Độ trần nhiều màu nổi bật với dải màu đa sắc màu như xanh, tím, vàng, đỏ đan xem với nhau</i></p><h3>Độ trần sao ô tô gồm mấy bước?</h3><p>Độ trần sao ô tô là một dạng trang trí nên đòi hỏi toàn bộ quá trình phải được thực hiện bởi những chuyên viên có kinh nghiệm và kỹ năng lâu năm trong lĩnh vực độ xe mới cho ra các sản phẩm đẹp và bắt mắt nhất. Một quy trình chuẩn sẽ bao gồm các bước sau đây:</p><p><strong>Bước 1:</strong> Kiểm tra tổng thể trần xe và đề xuất với khách về kiểu dáng độ trần sao ô tô phù hợp nhất.</p><p><strong>Bước 2:</strong> Tháo trần khỏi xe, sử dụng dung dịch vệ sinh chuyên dụng làm sạch trần xe.</p><p><strong>Bước 3:</strong> Khoan lỗ định hình và cố định sợi quang/đèn LED bằng keo dán chuyên dụng</p><p><strong>Bước 4:</strong> Cắt gọn các phần dây điện thừa</p><p><strong>Bước 5:</strong> Đợi keo khô, tiến hành đi dây diện và tích hợp nguồn mở cho hệ thống trần sao</p><p><strong>Bước 6:</strong> Kiểm tra độ sáng và hiệu ứng đã được lắp đặt đã giống mẫu chưa</p><p><strong>Bước 7:</strong> Hoàn thiện chi tiết, vệ sinh và bàn giao lại xe cho cho khách.</p><h3>Giá độ trần sao xe ô tô</h3><p>So với những dịch vụ trang bị khác như <strong>dán phim PPF</strong>, <strong>độ cốp điện ô tô</strong>, <strong>LED viền nội thất ô tô</strong> thì giá độ trần sao xe ô tô thường không quá lớn. Tùy vào từng thiết kế, vật liệu cũng như các dòng xe khác nhau mà mức giá sẽ có khoảng chênh lệch nhất định. Hiện tại giá độ trần xe ô tô có thể dao động trong khoảng từ 5 – 7 triệu đồng, tương ứng với bảo hành từ 6 tháng đến 2 năm.</p><p><img src="https://danchoioto.vn/wp-content/uploads/2023/03/Gia-do-tran-xe-o-to-dao-dong-trong-khoang-tu-5-7-trieu-dong.jpg.webp" alt="Giá độ trần xe ô tô dao động trong khoảng từ 5 – 7 triệu đồng" srcset="https://danchoioto.vn/wp-content/uploads/2023/03/Gia-do-tran-xe-o-to-dao-dong-trong-khoang-tu-5-7-trieu-dong.jpg.webp 850w, https://danchoioto.vn/wp-content/uploads/2023/03/Gia-do-tran-xe-o-to-dao-dong-trong-khoang-tu-5-7-trieu-dong-300x169.jpg.webp 300w, https://danchoioto.vn/wp-content/uploads/2023/03/Gia-do-tran-xe-o-to-dao-dong-trong-khoang-tu-5-7-trieu-dong-768x432.jpg.webp 768w, https://danchoioto.vn/wp-content/uploads/2023/03/Gia-do-tran-xe-o-to-dao-dong-trong-khoang-tu-5-7-trieu-dong-98x55.jpg.webp 98w" sizes="100vw" width="850"></p><p><i>Giá độ trần xe ô tô dao động trong khoảng từ 5 – 7 triệu đồng</i></p><h3>Độ trần sao xe ô tô ở đâu tốt?</h3><p>Để lắp đặt đèn sao cho xe ô tô trông đẹp mắt cần được thực hiện bởi những kỹ thuật viên có tay nghề cao nếu không sẽ ảnh hưởng đến độ “zin” của xe. Hiện nay, trên thị trường có rất nhiều garage uy tín cung cấp dịch vụ độ trần sao ô tô. Người dùng có thể tìm hiểu và cân nhắc để lựa chọn những địa chỉ có chế độ lắp ráp và bảo hành rõ ràng.</p><p>&nbsp;</p><p><a href="?tag=kinhnghiemlaixe">#kinhnghiemlaixe</a>&nbsp;</p><p>Nguồn: https://danchoioto.vn/do-tran-sao-o-to/</p>`
const html3 = `<p>Các chủ xe Hàn Quốc thường chi từ vài chục đến vài trăm triệu đồng để nâng cấp các tính năng còn thiếu hoặc làm đẹp xe, trong đó chủ yếu là nội thất.</p><p>&nbsp;</p><figure class="image"><img src="https://images-cdn.carpla.vn/forum/2023/02/1327_22.8.jpg"></figure><p>&nbsp;</p><p>Nam Anh, chủ xưởng độ xe tại Trần Vỹ, Cầu Giấy cho biết: “Hiện Carnival được khách hàng gia đình quan tâm, nhưng các tính năng nội và ngoại thất chưa đáp ứng nhu cầu phiên bản cao nhất là Royal lại có mức giá khá cao. Do vậy khách hàng thường mang xe đến đây để nâng cấp nhiều hạng mục".</p><p>&nbsp;</p><p>Tại xưởng của Nam Anh có khoảng 40 bộ phận có thể thực hiện nâng cấp, tuy nhiên khách chủ yếu chỉ nâng cấp khoảng 30 bộ phận chính, mức giá từ vài triệu đến hàng trăm triệu đồng.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-20-1672197171.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iMyKHpcDikK6WUkozebsRA" alt=""></p><p>&nbsp;</p><p>Ở ngoại thất, sẽ không có quá nhiều thứ cần phải thay đổi mà tập trung vào phần nội thất. Chiếc Carnival trong bài lắp thêm đèn Bi-LED gầm, mức giá khoảng 6 triệu đồng. Ở phần đuôi, đèn hậu sẽ được thay bằng đèn hậu LED liền mạch giống Porsche có giá 16 triệu đồng.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-7-1672197511.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=UdGXfkmBPIunwVUvtedQbw" alt=""></p><p>&nbsp;</p><p>Để xe thêm đầm chắc khi đi qua đường xấu, phần phuộc nguyên bản ở phía trước và sau sẽ được thay bằng phuộc Tein có mức giá 34 triệu đồng. Phần hốc lốp sẽ được hóa cứng với giá 6 triệu nhằm giảm tiếng ồn từ lốp. Trong khi dán chống ồn nằm trong gói chống ổn tổng thể của xe.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-1-1672197532.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=n_SVF2jchFkQHaGG5-5EJg" alt=""></p><p>&nbsp;</p><p>Gói chống ồn có mức giá 25 triệu đồng, sử dụng miếng dán chống ồn Silent Pro của Nga, được dán ở phần sàn với 2 lớp, hốc bánh 3 lớp, cửa 3 lớp và khoang máy một lớp.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-21-1672197559.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=p3NcrhhrUFa7JRoNwlzaKQ" alt=""></p><p>&nbsp;</p><p>Khoang ghế trước vẫn giữ nguyên các tính năng, vô-lăng có thể bọc thêm gỗ hoặc carbon, mức giá khoảng 6 triệu đồng. Đèn viền ở táp-lô, táp-pi và ở dưới chân có mức giá 7 triệu đồng. Ngoài ra một số khách hàng mong muốn có nước hoa của Mercedes, với giá khoảng 20 triệu đồng.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-4-1672197591.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=9bAeiyPiACX6DTljhfUxSg" alt=""></p><p>&nbsp;</p><p>Phần loa cũng được nâng cấp, tạo ra âm thanh vòm, mức giá khoảng 160 triệu đồng</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-12-1672197624.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=EeUAzQfhKEV119t6lujFeA" alt=""></p><p>&nbsp;</p><p>Hàng ghế sau được khách hàng quan tâm và nâng cấp nhiều nhất khi ghế nguyên bản chưa đáp ứng đủ nhu cầu. Anh Nam Anh cho biết: “Chúng tôi sẽ phải tháo hết khoang nội thất. Ghế sẽ được bọc lại da, dựa theo khách hàng mong muốn màu sắc và chất liệu như Nappa".</p><p>Ngoài ra ghế có thể điều chỉnh đa hướng, xoay 360 độ, có thêm cổng sạc USB và Type-C, tính năng sấy/sưởi/massage. Tổng chi phí bọc da và thêm tính năng khoảng 150 triệu đồng.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-16-1672197679.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=uw1X8kqeAan0Z-ZDqfQPzA" alt=""></p><p>&nbsp;</p><p>Sàn xe có nhiều tùy chọn nâng cấp với chất liệu như sợi carbon, đá marbel, gỗ, đều được phủ lớp chống xước, giá 25 triệu đồng.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-9-1672197717.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=C9Z4CkgzN1BJ3jqC_MsQLA" alt=""></p><p>&nbsp;</p><p>Bậc bước chân ở cửa được thay thế bằng titan, mức giá 15 triệu đồng. Ngoài ra, cửa nguyên bản cũng được nâng cấp cửa hít.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-18-1672197851.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=_jiBrp7TKMxW_yPEohWIFA" alt=""></p><p>&nbsp;</p><p>Phía trước hàng ghế thứ hai được lắp thêm màn hình tivi giải trí, mức giá khoảng 25 triệu đồng. Trần xe cũng được bọc da lộn và thêm đèn tạo trần sao có giá từ 20-25 triệu đồng</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-5-1672197897.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=xnseq4wXm-fqnEN57cNSjA" alt=""></p><p>&nbsp;</p><p>Ở một số xe, khách hàng mong muốn lắp thêm bàn làm việc, tùy chọn mở cơ hoặc mở điện, giá cao nhất 16 triệu đồng.</p><p>&nbsp;</p><p><img src="https://i1-vnexpress.vnecdn.net/2022/12/28/Kia-Carnival-do-VnExpress-13-1672197928.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Zwcskr6CKw2IDP4BeyH82Q" alt=""></p><p>&nbsp;</p><p>Thời gian để thi công, lắp đặt khoảng một tuần. Với tình trạng đăng kiểm hiện nay, khách hàng cần chú ý ngoài những nâng cấp về thẩm mỹ như bọc da, ốp gỗ... những nâng cấp vào hệ thống điện, kỹ thuật của xe có thể bị từ chối cấp giấy chứng nhận kiểm định nếu không đảm bảo an toàn.</p><p>&nbsp;</p><p><a href="?tag=doxe">#doxe</a>&nbsp;</p><p>Nguồn: https://vnexpress.net/chi-nua-ty-dong-nang-cap-noi-that-kia-carnival-4553591.html</p><p><br>&nbsp;</p>`
const a=htmlToBBCode(html3)
console.log(a)
